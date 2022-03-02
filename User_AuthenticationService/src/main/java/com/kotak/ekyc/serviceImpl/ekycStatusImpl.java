package com.kotak.ekyc.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kotak.ekyc.dao.ekycStatusRepo;
import com.kotak.ekyc.model.ekycStatusModel;
import com.kotak.ekyc.service.ekycStatus;

import java.util.Optional;

@Service
public class ekycStatusImpl implements ekycStatus {
	
	@Autowired
	private	ekycStatusRepo kycstatus; 
	public void save(ekycStatusModel ekyc) {
		// TODO Auto-generated method stub
		
		System.out.println("Add data in ekycStatus Table ");
		kycstatus.save(ekyc);
	}
	public Optional<ekycStatusModel> findByRequestId(Integer requestId){
		return kycstatus.findByRequestId(requestId);
	}


}
