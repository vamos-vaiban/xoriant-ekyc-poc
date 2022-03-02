package com.kotak.ekyc.service;

import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;

import com.kotak.ekyc.model.SingleSignInModel;

public interface SignInService {
	
	public String comsumeMobileOtpApi(JSONObject single, SingleSignInModel singleSignInModel);
	
	public List<SingleSignInModel> getAllDetails();
	
	public void saveOrUpdate(SingleSignInModel singleSignInModel);
	
	public SingleSignInModel saveDetails(SingleSignInModel singleSignInModel);
	
	public void update(SingleSignInModel singleSignInModel);
	
	public boolean isDataExist(int id);

	public Optional<SingleSignInModel> findByMobileNumber(String mobileNumber);
}
