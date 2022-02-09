package com.kotak.ekyc.controller;

import com.kotak.ekyc.model.PanPhotoPath;
import com.kotak.ekyc.model.PanPhotoPathRequest;
import com.kotak.ekyc.model.PanPhotoPathResponse;
import com.kotak.ekyc.model.SingleSignInModel;
import com.kotak.ekyc.service.PanPhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PanPhotoController {

    @Autowired
    private PanPhotoService panPhotoService;

    @PostMapping("savePancardPhotoPath")
    public ResponseEntity<?> savePancardPhotoLocation(@RequestHeader(value = "request_Id") Integer requestId, @RequestBody PanPhotoPathRequest request){
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
                panPhotoPathResponse.setMessage("Pan Photo Path saved");
            } else {
                panPhotoPathResponse.setStatus(false);
                panPhotoPathResponse.setMessage("Error Occurred while saving Pan Photo Path ");
            }
        }catch (Exception e){
            panPhotoPathResponse.setStatus(false);
            panPhotoPathResponse.setMessage("Error Occurred while saving Pan Photo Path ");
        }
        return new ResponseEntity<>(panPhotoPathResponse, HttpStatus.OK);
    }
}
