package com.kotak.ekyc.service;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.Query;

import com.kotak.ekyc.model.AadharPanModel;

public interface PanAadharService {
	
	public String consumePancardApi(JSONObject panCard);
	
	public String consumeAadharApi(JSONObject aadharNumber);
	
	public AadharPanModel saveDetails(AadharPanModel aadharPan);
	
	public boolean isDataExist(int request_Id);
	
	public void update(AadharPanModel apm) ;
	
	public AadharPanModel selectSaveRequestId(Integer request_id);

	

}
