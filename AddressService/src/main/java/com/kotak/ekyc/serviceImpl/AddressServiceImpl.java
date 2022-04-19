package com.kotak.ekyc.serviceImpl;

import com.kotak.ekyc.model.City;
import com.kotak.ekyc.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kotak.ekyc.ddao.AddressRepository;
import com.kotak.ekyc.model.AddressModel;
import com.kotak.ekyc.service.AddressService;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService{
	
	@Autowired
	private AddressRepository addressRepository;
	
	
	public AddressModel addressDetails(AddressModel addressModel) {
		return addressRepository.save(addressModel);
	}

	public List<State> getAllState() {
		return addressRepository.findAllState();
	}

	public List<City> getCitiesByStateId(int stateId) {
		return addressRepository.findAllCityByStateId(stateId);
	}

}
