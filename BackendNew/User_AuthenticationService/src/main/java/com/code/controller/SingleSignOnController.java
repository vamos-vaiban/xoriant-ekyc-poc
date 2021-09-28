package com.code.controller;

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

import com.code.model.SingleSign;
import com.code.service.SignService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SingleSignOnController {

	@Autowired
	private SignService signService;

	@GetMapping("/sign")
	private List<SingleSign> getAllDetails() {
		return signService.getAllDetails();
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	private ResponseEntity<SingleSign> saveDetailsInfo(@RequestBody SingleSign singleSign) {
		singleSign.setLogin_start_time(new Date(new java.util.Date().getTime()));
		signService.saveOrUpdate(singleSign);
		return ResponseEntity.status(HttpStatus.OK).build();
	}

	@RequestMapping(value = "/saveDetails", method = RequestMethod.POST)
	private String saveInfo(@RequestBody SingleSign singleSign) {
		singleSign.setLogin_start_time(new Date(new java.util.Date().getTime()));
		signService.saveOrUpdate(singleSign);
		return "Data saved SuccessFully";
	}

	@PutMapping(value = "/{signOn}", produces = MediaType.APPLICATION_JSON_VALUE)
	private SingleSign update(@RequestBody SingleSign singleSign) {
		signService.update(singleSign);
		return singleSign;
	}

	@RequestMapping(value = "signOn/{request_Id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateData(@PathVariable("request_Id") int request_Id,

			@RequestBody SingleSign singleSign) throws DataNotFoundExceptions {
		boolean isDataExist = signService.isDataExist(request_Id);
		if (isDataExist) {
			singleSign.setRequest_Id(request_Id);
			signService.update(singleSign);
			return new ResponseEntity<Object>("Data updated successfully", HttpStatus.OK);
		} else {
			throw new DataNotFoundExceptions();
		}
	}


	@CrossOrigin
	@RequestMapping(value = "/signOn", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<SingleSign> saveAlldetails(@RequestBody SingleSign singleSign) {
		singleSign.setLogin_start_time(new Date(new java.util.Date().getTime()));
		singleSign.getMobile_number();
		SingleSign single = signService.saveDetails(singleSign);
		System.out.println(single.getRequest_Id());
		System.out.println(single);
		return new ResponseEntity<SingleSign>(single, HttpStatus.OK);
	}

	@RequestMapping(value = "/signOn", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<SingleSign> saveAlldetails1(@RequestBody SingleSign singleSign, JSONObject signIn) {
		singleSign.setLogin_start_time(new Date(new java.util.Date().getTime()));
		String sign = singleSign.getMode_Of_Authentication();
		// singleSign.setMode_Of_Authentication("via-mobile");
		SingleSign single = null;

		if (sign == "via-mobile") {
			// Random rand = new Random();
			// int OTP = rand.nextInt(999999);
			signService.comsumeMobileOtpApi(signIn);
			single = signService.saveDetails(singleSign);
			return new ResponseEntity<SingleSign>(single, HttpStatus.OK);
		} else {
			single = signService.saveDetails(singleSign);
			System.out.println(single.getRequest_Id());
			System.out.println(single);
			return new ResponseEntity<SingleSign>(single, HttpStatus.OK);
		}
	}
}
