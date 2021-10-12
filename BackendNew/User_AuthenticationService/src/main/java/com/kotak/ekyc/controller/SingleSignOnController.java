package com.kotak.ekyc.controller;

import java.util.Date;
import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kotak.ekyc.model.SingleSignInModel;
import com.kotak.ekyc.service.SignInService;



@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SingleSignOnController {

	@Autowired
	private SignInService signInService;

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


	@CrossOrigin
	@RequestMapping(value = "/signOn", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<SingleSignInModel> saveAlldetails(@RequestBody SingleSignInModel singleSignInModel) {
		singleSignInModel.setLogin_start_time(new Date(new java.util.Date().getTime()));
		singleSignInModel.getMobile_number();
		SingleSignInModel single = signInService.saveDetails(singleSignInModel);
		System.out.println(single.getRequest_Id());
		System.out.println(single);
		return new ResponseEntity<SingleSignInModel>(single, HttpStatus.OK);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/signOnn", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<SingleSignInModel> saveAlldetails1(@RequestBody SingleSignInModel singleSignInModel) {
		singleSignInModel.setLogin_start_time(new Date(new java.util.Date().getTime()));
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("numbers", singleSignInModel.getMobile_number());
		signInService.comsumeMobileOtpApi(jsonObject,singleSignInModel);
		SingleSignInModel single = signInService.saveDetails(singleSignInModel);
		System.out.println("SingleSignOnController.saveAlldetails1()" + single.getRequest_Id());
		return new ResponseEntity<SingleSignInModel>(single, HttpStatus.OK);
	}
}
