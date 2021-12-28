package com.kotak.ekyc.controller;

import java.util.Date;

import javax.validation.Valid;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kotak.ekyc.model.AadharPanModel;
import com.kotak.ekyc.model.MobileNumber;
import com.kotak.ekyc.service.PanAadharService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AdharPanController {

	@Autowired
	private PanAadharService service;
	


	@RequestMapping(value = "/PanNumber", method = RequestMethod.POST, produces = "application/json")
	public String panCardValiddtaion(@Valid @RequestBody JSONObject panNumber) {
		return service.consumePancardApi(panNumber);
	}

	@CrossOrigin
	@RequestMapping(value = "/AadharNumber", method = RequestMethod.POST, produces = "application/json")
	public String aadharNumValidations(@Valid @RequestBody JSONObject aadharNumber) {
		return service.consumeAadharApi(aadharNumber);
	}

	@CrossOrigin
	@RequestMapping(value = "/MobileNumber", method = RequestMethod.POST, produces = "application/json")
	public String mobileNumberValidations(@Valid @RequestBody MobileNumber mobileNumber) {
		return "Mobile Number is valid";
	}

	// Save all details if valid
	@CrossOrigin
	@RequestMapping(value = "/PanAadharMobile", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<AadharPanModel> saveAlldetails(@RequestBody AadharPanModel aadharPanModel,
			@RequestHeader(value = "request_Id") int request_id) {

		System.out.println("Request Id : " + request_id);
		aadharPanModel.setInserted_date(new Date(new java.util.Date().getTime()));
		aadharPanModel.setUser_Request_id(request_id);
		System.out.println(aadharPanModel);
		AadharPanModel aadharPan = service.saveDetails(aadharPanModel);
		System.out.println(aadharPan.getAadhar_number());
		System.out.println(aadharPan);
		return new ResponseEntity<AadharPanModel>(aadharPan, HttpStatus.OK);
	}
	

}
