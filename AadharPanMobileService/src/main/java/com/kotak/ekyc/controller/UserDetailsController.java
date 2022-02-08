package com.kotak.ekyc.controller;

import com.kotak.ekyc.model.UserDetails;
import com.kotak.ekyc.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class UserDetailsController {

    @Autowired
    private UserDetailsService userDetailsService;

    @GetMapping("/getUserData")
	public UserDetails getUserData(@RequestHeader(value = "request_Id") Integer request_id) {
		UserDetails userDetails = userDetailsService.getUserDetails(request_id);
		if (userDetails == null) {
			return userDetails;
		} else {
			return userDetails;
		}

	}


}
