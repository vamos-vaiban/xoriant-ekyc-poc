package com.code.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.model.Address;
import com.code.repository.AddressRepository;

@Service
public class AddressService {
	
	@Autowired
	private AddressRepository addressRepository;
	
	
	public Address addressDetails(Address address) {
		return addressRepository.save(address);
	}

}
