package com.code.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.code.model.Address;
import com.code.service.AddressService;


@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AddressController {
	
	@Autowired
	private AddressService addressService;
	
	
	@PostMapping("/Address")
	public ResponseEntity<Address> saveAddressDetails(@RequestBody Address address){
		Address addressModel=addressService.addressDetails(address);
		return new ResponseEntity<Address>(addressModel,HttpStatus.OK);
	}
	
}
