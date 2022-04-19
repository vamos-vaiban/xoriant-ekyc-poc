package com.kotak.ekyc.controller;

import com.kotak.ekyc.ddao.AddressRepository;
import com.kotak.ekyc.model.City;
import com.kotak.ekyc.model.SingleSignInModel;
import com.kotak.ekyc.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.kotak.ekyc.model.AddressModel;
import com.kotak.ekyc.service.AddressService;

import java.util.List;


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

	@GetMapping("/getAllStates")
	public ResponseEntity<?> getAllState() {
		List<State> stateList = addressService.getAllState();
		if(stateList.isEmpty() || stateList==null)
		{
			return new ResponseEntity<>("State list not found.", HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(stateList,HttpStatus.OK);
		}
	}

	@GetMapping("/getAllCitiesBasedOnStateId/{state_id}")
	public ResponseEntity<?> getAllCitiesBasedOnStateId(@PathVariable(value = "state_id") int stateId) {
		List<City> cityList= addressService.getCitiesByStateId(stateId);
		System.out.println("Citylist"+ cityList.toString());
		if(cityList.isEmpty() || cityList==null)
		{
			return new ResponseEntity<>("City list with state id "+ stateId + " not found.", HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(cityList,HttpStatus.OK);
		}
	}



}
