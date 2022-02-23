package com.kotak.ekyc.controller;

import com.kotak.ekyc.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
//@RequestMapping("/api/")
public class UserController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/user")
    public String getUser() {
        return "I am the user of User Security Group";
    }

    @PostMapping(value = "/signOnn")
    public ResponseEntity<SingleSignInModel> saveAllDetails1(@RequestBody SingleSignInModel singleSignInModel) throws URISyntaxException {

        final String baseUrl = "http://localhost:9090/signOnn";
        URI uri = new URI(baseUrl);
        ResponseEntity<SingleSignInModel> result = restTemplate.postForEntity(uri, singleSignInModel, SingleSignInModel.class);
        return result;
    }

    @PostMapping(value = "/PanAadharMobile")
    public ResponseEntity<AadharPanModel> saveAlldetails(@RequestBody AadharPanModel aadharPanModel,
                                                         @RequestHeader(value = "request_Id") int request_id) throws URISyntaxException {
        final String baseUrl = "http://localhost:7070/PanAadharMobile";
        HttpHeaders headers = new HttpHeaders();
        headers.set("request_Id", String.valueOf(request_id));
        HttpEntity<AadharPanModel> request = new HttpEntity<>(aadharPanModel, headers);
        URI uri = new URI(baseUrl);
        ResponseEntity<AadharPanModel> result = restTemplate.postForEntity(uri, request, AadharPanModel.class);
        return result;
    }

    @PostMapping("/Address")
    public ResponseEntity<AddressModel> saveAddressDetails(@RequestBody AddressModel addressModel, @RequestHeader(value = "request_Id") int request_id) throws URISyntaxException {
        final String baseUrl = "http://localhost:7575/Address";
        HttpHeaders headers = new HttpHeaders();
        headers.set("request_Id", String.valueOf(request_id));
        HttpEntity<AddressModel> request = new HttpEntity<>(addressModel, headers);
        URI uri = new URI(baseUrl);
        ResponseEntity<AddressModel> result = restTemplate.postForEntity(uri, request, AddressModel.class);
        return result;
    }

    @PostMapping("savePancardPhotoPath")
    public ResponseEntity<PanPhotoPathResponse> savePancardPhotoLocation(@RequestHeader(value = "request_Id") Integer requestId, @RequestBody PanPhotoPathRequest panPhotoPathRequest) throws URISyntaxException {
        final String baseUrl = "http://localhost:7070/savePancardPhotoPath";
        HttpHeaders headers = new HttpHeaders();
        headers.set("request_Id", String.valueOf(requestId));
        HttpEntity<PanPhotoPathRequest> request = new HttpEntity<>(panPhotoPathRequest, headers);
        URI uri = new URI(baseUrl);
        ResponseEntity<PanPhotoPathResponse> result = restTemplate.postForEntity(uri, request, PanPhotoPathResponse.class);
        return result;
    }
}