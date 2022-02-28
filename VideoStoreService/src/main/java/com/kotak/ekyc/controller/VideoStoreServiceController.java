package com.kotak.ekyc.controller;

import com.kotak.ekyc.model.JSONResponse;
import com.kotak.ekyc.model.Video;
import com.kotak.ekyc.service.S3VideoStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RestController
@CrossOrigin
public class VideoStoreServiceController {

    @Autowired
    private S3VideoStoreService s3VideoStoreService;

    @PostMapping("/uploadFile")
    public JSONResponse uploadFile(@RequestPart(value = "file") MultipartFile file, @RequestHeader(value = "request_Id") Integer requestId) {
        String url = s3VideoStoreService.uploadFile(file, requestId);
        JSONResponse response = new JSONResponse();
        if(!url.isEmpty()) {
            response.setStatus(true);
            response.setMessage("File Uploaded to S3 :" + url);
        }else{
            response.setStatus(false);
            response.setMessage("Failed to Upload file to S3");
        }
        return response;
    }

    @PostMapping("/delete/{requestId}")
    public String deleteFile(@PathVariable(name = "requestId") Long requestId){
        Optional<Video> byId = s3VideoStoreService.getById(requestId);
        if(byId.isPresent()){
            String fileName = byId.get().getS3URL().substring(byId.get().getS3URL().lastIndexOf("/") + 1);
            boolean file = s3VideoStoreService.deleteFileFromS3Bucket(fileName);
            if(file){
                s3VideoStoreService.deleteById(requestId);
            }
            return "File Deleted from S3";
        }else{
            return "File Not Available for ID : "+requestId;
        }
    }

    @GetMapping("/download/{requestId}")
    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable(name = "requestId") Long requestId){
        Optional<Video> byId = s3VideoStoreService.getById(requestId);
        if(byId.isPresent()){
            String fileName = byId.get().getS3URL().substring(byId.get().getS3URL().lastIndexOf("/") + 1);
            byte[] data = s3VideoStoreService.download(fileName);
            ByteArrayResource resource = new ByteArrayResource(data);
            return ResponseEntity
                    .ok()
                    .contentLength(data.length)
                    .header("Content-type", "application/octet-stream")
                    .header("Content-disposition", "attachment; filename=\"" + fileName + "\"")
                    .body(resource);
        }else{
            ByteArrayResource resource = new ByteArrayResource(("File Not Present for ID:"+requestId).getBytes());
            return ResponseEntity.ok().body(resource);
        }
    }
}
