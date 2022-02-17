package com.kotak.ekyc.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {

    @GetMapping("/")
    public String getResources(){
        return "Getting Resource using OAuth2";
    }

    @GetMapping("/login")
    public ResponseEntity<?> login(){
        return ResponseEntity.ok("success");
    }
}
