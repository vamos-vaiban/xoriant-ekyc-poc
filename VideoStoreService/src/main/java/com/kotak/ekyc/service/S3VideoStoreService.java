package com.kotak.ekyc.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.util.IOUtils;
import com.kotak.ekyc.model.Video;
import com.kotak.ekyc.repository.VideoServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Optional;

@Service
public class S3VideoStoreService {

    @Value("${amazonProperties.endpointUrl}")
    private String endpointUrl;
    @Value("${amazonProperties.bucketName}")
    private String bucketName;
    @Autowired
    private AmazonS3 amazonS3;

    @Autowired
    private VideoServiceRepository videoServiceRepository;


    public String uploadFile(MultipartFile multipartFile,Integer requestId) {

        String fileUrl = "";
        try {
            File file = convertMultiPartToFile(multipartFile);
            String fileName = generateFileName(multipartFile,requestId);
            fileUrl = endpointUrl + "/" + bucketName + "/" + fileName;
            boolean bucket = uploadFileTos3bucket(fileName, file);
            boolean videoDetailsToDB = saveVideoDetailsToDB(fileUrl, requestId);
            if(!bucket || !videoDetailsToDB){
                fileUrl="";
            }
            file.delete();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return fileUrl;
    }

    private boolean saveVideoDetailsToDB(String fileUrl, Integer requestId) {
        try {
            Video video = new Video();
            video.setId(Long.valueOf(requestId));
            video.setS3URL(fileUrl);
            videoServiceRepository.save(video);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    private boolean uploadFileTos3bucket(String fileName, File file) {
        try {
            amazonS3.putObject(new PutObjectRequest(bucketName, fileName, file)
                    .withCannedAcl(CannedAccessControlList.PublicRead));
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    private String generateFileName(MultipartFile multiPart, Integer requestId) {
        return  requestId + "-" + multiPart.getOriginalFilename().replace(" ", "_");
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }

    public byte[] download(String fileName) {
        try {
            S3Object s3Object = amazonS3.getObject(bucketName, fileName);
            S3ObjectInputStream inputStream = s3Object.getObjectContent();
            return IOUtils.toByteArray(inputStream);
        } catch (AmazonServiceException | IOException e) {
            throw new IllegalStateException("Failed to download the file", e);
        }
    }

    public boolean deleteFileFromS3Bucket(String fileName) {
        try {
            amazonS3.deleteObject(bucketName, fileName);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }

    }

    public Optional<Video> getById(Long requestId){
        return videoServiceRepository.findById(requestId);
    }

    public void deleteById(Long requestId){
        videoServiceRepository.deleteById(requestId);
    }
}
