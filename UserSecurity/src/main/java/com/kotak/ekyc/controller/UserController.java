package com.kotak.ekyc.controller;

import com.kotak.ekyc.config.MultipartInputStreamFileResource;
import com.kotak.ekyc.model.*;
import com.kotak.ekyc.repository.UserAuthenticationRepository;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
//@RequestMapping("/api/")
public class UserController {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private UserAuthenticationRepository userAuthenticationRepository;

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

    @PostMapping("/validateMobileOTP")
    public ResponseEntity<JSONObject> validateOTP(@RequestHeader(value = "request_Id") Integer requestId,@RequestParam("mobileNumber") String mobileNumber,@RequestParam("otp") String mobileOtp) {
        JSONObject jsonObject = new JSONObject();
        Optional<UserAuthentication> user_not_registered = Optional.ofNullable(userAuthenticationRepository.findByRequestId(requestId).orElseThrow(() -> new UsernameNotFoundException("User Not Registered")));
        UserAuthentication userAuthentication = user_not_registered.get();
        if (userAuthentication.getMobileNumber().equalsIgnoreCase(mobileNumber) && userAuthentication.getMobileNumberOtp().equalsIgnoreCase(mobileOtp)) {
            jsonObject.put("status", true);
            jsonObject.put("message", "OTP Validated");
            return new ResponseEntity<>(jsonObject, HttpStatus.OK);
        } else {
            jsonObject.put("status", false);
            jsonObject.put("message", "Invalid OTP");
            return new ResponseEntity<>(jsonObject, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/uploadFile")
    public ResponseEntity<JSONResponse> uploadFile(@RequestPart(value = "file") MultipartFile file, @RequestHeader(value = "request_Id") Integer requestId) throws URISyntaxException, IOException {
        final String baseUrl = "http://localhost:4040/uploadFile";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        headers.set("request_Id", String.valueOf(requestId));
        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("file", new MultipartInputStreamFileResource(file.getInputStream(), file.getOriginalFilename()));
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
        URI uri = new URI(baseUrl);
        ResponseEntity<JSONResponse> result = restTemplate.postForEntity(uri, requestEntity, JSONResponse.class);
        return result;
    }
}