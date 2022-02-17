package com.kotak.ekyc.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class UserController {

    @GetMapping("/user")
    public String getUser(){
        return "I am the user of User Security Group";
    }
}