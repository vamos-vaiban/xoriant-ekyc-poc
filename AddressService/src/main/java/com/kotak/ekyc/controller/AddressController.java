package com.kotak.ekyc.controller;

import com.kotak.ekyc.ddao.AddressRepository;
import com.kotak.ekyc.model.SingleSignInModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.kotak.ekyc.model.AddressModel;
import com.kotak.ekyc.service.AddressService;


@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AddressController {
	
	@Autowired
	private AddressService addressService;

	@Autowired
	private AddressRepository addressRepository;

	@PostMapping("/Address")
	public AddressModel saveAddressDetails(@RequestBody AddressModel addressModel,@RequestHeader(value="request_Id") int request_id){
		SingleSignInModel singleSignInModel= new SingleSignInModel();
		singleSignInModel.setRequest_Id(request_id);
		addressModel.setSingleSignInModel(singleSignInModel);
		AddressModel addressModel2=addressRepository.findByRequestId(request_id);
		System.out.println(addressModel2.toString());
		if(addressModel2!=null)
		{
			return addressModel2;
		}
		else
		{
			AddressModel addressModel1=addressService.addressDetails(addressModel);
			return addressModel1;
		}
	}
	
	public String viewAllDetails() {
		return null;
	}
	
	
	@SuppressWarnings("unused")
	private static String generateRandomAccountNumber() {
		return Double.toString(Math.random()).substring(2,12);		
	}
}
