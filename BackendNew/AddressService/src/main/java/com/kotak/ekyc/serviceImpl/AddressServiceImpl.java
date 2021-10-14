package com.kotak.ekyc.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kotak.ekyc.ddao.AddressRepository;
import com.kotak.ekyc.model.AddressModel;
import com.kotak.ekyc.service.AddressService;

@Service
public class AddressServiceImpl implements AddressService{
	
	@Autowired
	private AddressRepository addressRepository;
	
	
	public AddressModel addressDetails(AddressModel addressModel) {
		return addressRepository.save(addressModel);
	}

}
