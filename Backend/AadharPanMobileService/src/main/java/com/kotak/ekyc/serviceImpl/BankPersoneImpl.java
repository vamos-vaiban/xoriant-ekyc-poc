package com.kotak.ekyc.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kotak.ekyc.dao.BankPersones;
import com.kotak.ekyc.model.BankPersoneReport;
import com.kotak.ekyc.service.BankPersoneService;

@Service
public class BankPersoneImpl implements BankPersoneService{
	
	@Autowired
	private BankPersones bankPersone;
	
	public List<BankPersoneReport> getData() {
		// TODO Auto-generated method stub
		return bankPersone.getAllData();
	}

}
