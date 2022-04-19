package com.kotak.ekyc.service;

import com.kotak.ekyc.model.AddressModel;
import com.kotak.ekyc.model.City;
import com.kotak.ekyc.model.State;

import java.util.List;

public interface AddressService {
	
	public AddressModel addressDetails(AddressModel addressModel);

    List<State> getAllState();

    List<City> getCitiesByStateId(int stateId);
}
