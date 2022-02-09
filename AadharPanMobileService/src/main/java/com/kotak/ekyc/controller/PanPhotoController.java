package com.kotak.ekyc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.kotak.ekyc.model.PanPhotoPath;
import com.kotak.ekyc.model.PanPhotoPathRequest;
import com.kotak.ekyc.model.PanPhotoPathResponse;
import com.kotak.ekyc.model.SingleSignInModel;
import com.kotak.ekyc.service.PanPhotoService;

@RestController
@CrossOrigin
public class PanPhotoController {

    @Autowired
    private PanPhotoService panPhotoService;

    @PostMapping("savePancardPhotoPath")
    public PanPhotoPathResponse savePancardPhotoLocation(@RequestHeader(value = "request_Id") Integer requestId, @RequestBody PanPhotoPathRequest request){
        PanPhotoPathResponse panPhotoPathResponse = new PanPhotoPathResponse();
        PanPhotoPath panPhotoPath  = new PanPhotoPath();
        panPhotoPath.setPhotopath(request.getPath());
        panPhotoPath.setSimilarity(request.getSimilarity());
        SingleSignInModel singleSignInModel = new SingleSignInModel();
        singleSignInModel.setRequest_Id(requestId);
        panPhotoPath.setSingleSignInModel(singleSignInModel);
        PanPhotoPath panPhotoPath1=null;
        Integer updateValue=null;
        try {
            List<PanPhotoPath> panPhotoPaths=panPhotoService.findByRequestId(requestId);
            if (panPhotoPaths.size() >= 1) {
                updateValue=panPhotoService.updatePanPhotoDetails(panPhotoPath.getPhotopath(), panPhotoPath.getSimilarity(), requestId);
            } else {
                panPhotoPath1=panPhotoService.savePanPhotoDetails(panPhotoPath);
            }
            if (panPhotoPath1 != null || updateValue != null) {
                panPhotoPathResponse.setStatus(true);
                panPhotoPathResponse.setMessage("Aadhar Photo Path saved");
            } else {
                panPhotoPathResponse.setStatus(false);
                panPhotoPathResponse.setMessage("Error Occurred while saving Aadhar Photo Path ");
            }
        }catch (Exception e){
            panPhotoPathResponse.setStatus(false);
            panPhotoPathResponse.setMessage("Error Occurred while saving Aadhar Photo Path ");
        }
        return panPhotoPathResponse;
    }
}
