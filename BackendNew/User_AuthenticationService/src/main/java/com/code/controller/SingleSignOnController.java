package com.code.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
public class SingleSignOnController {

	@Autowired
	private SignService signService;

	@GetMapping("/sign")
	private List<SingleSign> getAllDetails() {
		return signService.getAllDetails();
	}

	// creating a get mapping that retrieves the detail of a specific
	@GetMapping("/sign/{request_Id}")
	private SingleSign getAllDetils(@PathVariable("request_Id") int request_Id) {
		return signService.getAllDetailsById(request_Id);
	}

	@DeleteMapping("/sign/{request_Id}")
	private void deletebById(@PathVariable("request_Id") int request_Id) {
		signService.delete(request_Id);
	}

	@RequestMapping(value = "/signOn", method = RequestMethod.POST, produces = "application/json")
	private int saveAllDetails(@RequestBody SingleSign singleSign) {
		singleSign.setLogin_start_time(new Date(new java.util.Date().getTime()));
		signService.saveOrUpdate(singleSign);
		return singleSign.getRequest_Id();
	}
	
	@RequestMapping(value = "/save" ,method = RequestMethod.POST)
	private ResponseEntity<SingleSign> saveDetailsInfo(@RequestBody SingleSign singleSign){
		singleSign.setLogin_start_time(new Date(new java.util.Date().getTime()));
		signService.saveOrUpdate(singleSign);
		return ResponseEntity.status(HttpStatus.OK).build();
	}

	@RequestMapping(value = "/saveDetails" ,method = RequestMethod.POST)
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
	/*
	 * @GetMapping(value = "requestId") public ResponseEntity<Object>
	 * getrequest_Id(int request_Id){ signService.findByRequestId(request_Id);
	 * return new ResponseEntity<Object>("id update or not",HttpStatus.OK); }
	 */

}
