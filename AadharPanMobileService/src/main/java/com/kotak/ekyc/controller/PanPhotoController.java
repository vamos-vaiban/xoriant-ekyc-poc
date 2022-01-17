package com.kotak.ekyc.controller;

import com.kotak.ekyc.model.PanPhotoPath;
import com.kotak.ekyc.model.SingleSignInModel;
import com.kotak.ekyc.service.PanPhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class PanPhotoController {

    @Autowired
    private PanPhotoService panPhotoService;

    @PostMapping("savePancardPhotoPath")
    public ResponseEntity<String> savePancardPhotoLocation(@RequestHeader(value = "request_Id") Integer requestId, @RequestParam(value = "path") String path){
        PanPhotoPath panPhotoPath  = new PanPhotoPath();
        panPhotoPath.setPhotopath(path);
        SingleSignInModel singleSignInModel = new SingleSignInModel();
        singleSignInModel.setRequest_Id(requestId);
        panPhotoPath.setSingleSignInModel(singleSignInModel);
        panPhotoService.savePanPhotoDetails(panPhotoPath);
        return new ResponseEntity<>("Success", HttpStatus.OK);
    }
}
