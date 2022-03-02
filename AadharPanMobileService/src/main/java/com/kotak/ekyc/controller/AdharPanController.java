package com.kotak.ekyc.controller;

import java.util.Date;

import javax.validation.Valid;

import com.kotak.ekyc.dao.DOBModelDao;
import com.kotak.ekyc.model.SingleSignInModel;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
		SingleSignInModel singleSignInModel= new SingleSignInModel();
		singleSignInModel.setRequest_Id(request_id);
		aadharPanModel.setInserted_date(new Date(new java.util.Date().getTime()));
		aadharPanModel.setSingleSignInModel(singleSignInModel);
		System.out.println(aadharPanModel);
		aadharPanModel.setAccountNumber(service.getAccountNumber(request_id));
		aadharPanModel.setCRN(service.getCRN());
		AadharPanModel aadharPan = service.saveDetails(aadharPanModel);
		System.out.println(aadharPan.getAadhar_number());
		System.out.println(aadharPan);
		return new ResponseEntity<AadharPanModel>(aadharPan, HttpStatus.OK);
	}

	@GetMapping("/getFullNameAndDOB")
	public ResponseEntity<?> getFullNameAndDOB(@RequestHeader(value = "request_Id") Integer request_id)  {
		DOBModelDao dobModelDao= service.getFullNameAndDOB(request_id);
		if(dobModelDao==null){
			return new ResponseEntity<>("Requested DOB and Full Name Data with Request ID " + request_id + " not Found", HttpStatus.OK);
		}
		else{
			return new ResponseEntity<>(dobModelDao, HttpStatus.OK);
		}

	}

}
