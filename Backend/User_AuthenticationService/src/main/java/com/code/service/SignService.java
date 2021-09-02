package com.code.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.model.SingleSign;
import com.code.repository.SignRepository;

@Service
public class SignService {
	
	@Autowired
	private SignRepository signRepository;
	
	public List<SingleSign> getAllDetails() {
		List<SingleSign> listOfDetails = new ArrayList<SingleSign>();
		signRepository.findAll();
		return listOfDetails;
	}
	
	public SingleSign getAllDetailsById(int id) {
		return signRepository.findById(id).get();
	}
	
	public void saveOrUpdate(SingleSign singleSign) {
		signRepository.save(singleSign);
	}
	
	public void delete(int id) {
		signRepository.deleteById(id);
	}
	
	public void update(SingleSign singleSign) {
		signRepository.save(singleSign);
	}

	public boolean isDataExist(int id) {
		return signRepository.existsById(id);
	}

}
