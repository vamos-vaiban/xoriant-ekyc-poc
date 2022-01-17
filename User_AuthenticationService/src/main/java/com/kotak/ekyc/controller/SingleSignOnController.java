package com.kotak.ekyc.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.kotak.ekyc.dao.SignInRepository;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.kotak.ekyc.model.SingleSignInModel;
import com.kotak.ekyc.model.ekycStatusModel;
import com.kotak.ekyc.service.SignInService;
import com.kotak.ekyc.service.ekycStatus;



@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SingleSignOnController {

	@Autowired
	private SignInService signInService;
	
	@Autowired
	private ekycStatus status;

	@Autowired
	private SignInRepository signInRepository;

	@GetMapping("/sign")
	private List<SingleSignInModel> getAllDetails() {
		return signInService.getAllDetails();
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	private ResponseEntity<SingleSignInModel> saveDetailsInfo(@RequestBody SingleSignInModel singleSignInModel) {
		singleSignInModel.setLogin_start_time(new Date(new java.util.Date().getTime()));
		signInService.saveOrUpdate(singleSignInModel);
		return ResponseEntity.status(HttpStatus.OK).build();
	}

	@RequestMapping(value = "/saveDetails", method = RequestMethod.POST)
	private String saveInfo(@RequestBody SingleSignInModel singleSignInModel) {
		singleSignInModel.setLogin_start_time(new Date(new java.util.Date().getTime()));
		signInService.saveOrUpdate(singleSignInModel);
		return "Data saved SuccessFully";
	}

	@PutMapping(value = "/{signOn}", produces = MediaType.APPLICATION_JSON_VALUE)
	private SingleSignInModel update(@RequestBody SingleSignInModel singleSignInModel) {
		signInService.update(singleSignInModel);
		return singleSignInModel;
	}

	@RequestMapping(value = "signOn/{request_Id}",method = RequestMethod.PUT)
	public ResponseEntity<Object> updateData(@PathVariable("request_Id")int request_Id, @RequestBody SingleSignInModel singleSignInModel) throws DataNotFoundExceptions{
		boolean isDataExist = signInService.isDataExist(request_Id);
		if(isDataExist) {
			singleSignInModel.setRequest_Id(request_Id);
			signInService.update(singleSignInModel);
			return new ResponseEntity<Object>("Data updated successfully",HttpStatus.OK);
		}
		else {
			throw new DataNotFoundExceptions();
		}
	}


//	@CrossOrigin
//	@RequestMapping(value = "/signOn", method = RequestMethod.POST, produces = "application/json")
//	public ResponseEntity<SingleSignInModel> saveAllDetails(@RequestBody SingleSignInModel singleSignInModel) {
//		singleSignInModel.setLogin_start_time(new Date(new java.util.Date().getTime()));
//		//singleSignInModel.setRequest_Id(request_id);
//		singleSignInModel.getMobile_number();
//		SingleSignInModel single = signInService.saveDetails(singleSignInModel);
//		System.out.println(single.getRequest_Id());
//		System.out.println(single);
//		return new ResponseEntity<SingleSignInModel>(single, HttpStatus.OK);
//	}
	
	@CrossOrigin
	@RequestMapping(value = "/signOnn", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<SingleSignInModel> saveAllDetails1(@RequestBody SingleSignInModel singleSignInModel) {
		singleSignInModel.setLogin_start_time(new Date(new java.util.Date().getTime()));
		//singleSignInModel.setRequest_Id(request_id);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("numbers", singleSignInModel.getMobile_number());
		signInService.comsumeMobileOtpApi(jsonObject,singleSignInModel);
		SingleSignInModel single = signInService.saveDetails(singleSignInModel);
		System.out.println("SingleSignOnController.saveAllDetails1()" + single.getRequest_Id());
		
		ekycStatusModel estatus = new ekycStatusModel();
		
		estatus.setRequestId(single.getRequest_Id());
		estatus.setRejectionReason(" ");
		estatus.setStatus("Pending");
		System.out.println("estatus: " + estatus);
		
		status.save(estatus);		
		
		return new ResponseEntity<SingleSignInModel>(single, HttpStatus.OK);
	}

	@RequestMapping(value = "/validateOTP", method = RequestMethod.GET)
	public boolean validateOTP(@RequestHeader(value = "request_Id") int request_Id,@RequestParam(value= "mobile_number_otp")String mobile_number_otp) throws DataNotFoundExceptions {
		boolean isDataExist = signInService.isDataExist(request_Id);
		System.out.println("isDataExist: " + isDataExist);
		if(isDataExist) {
			Optional<SingleSignInModel> singleSignInModel= signInRepository.findById(request_Id);
			SingleSignInModel signInModel= singleSignInModel.get();
			if(signInModel.getMobile_number_otp().equalsIgnoreCase(mobile_number_otp)){
				return true;
			}
			else{
				return true;
			}
		}
		else {
			throw new DataNotFoundExceptions();
		}
	}
}
