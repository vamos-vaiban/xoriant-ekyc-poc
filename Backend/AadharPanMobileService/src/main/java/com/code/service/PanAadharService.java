package com.code.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.model.AadharPanModel;
import com.code.repository.AadharPanRepository;

@Service
public class PanAadharService {
	
	@Autowired
	private AadharPanRepository aadharPanRepo;
	
	public AadharPanModel saveDetails(AadharPanModel aadharPan) {
		return aadharPanRepo.save(aadharPan);
	}
	
	public boolean isDataExist(int request_Id) {
		return aadharPanRepo.existsById(request_Id);
	}
	
	public void update(AadharPanModel apm) {
		aadharPanRepo.save(apm);
	}
	
	

}
