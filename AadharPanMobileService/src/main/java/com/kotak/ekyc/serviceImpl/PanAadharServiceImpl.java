package com.kotak.ekyc.serviceImpl;

import java.util.List;
import java.util.Random;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.kotak.ekyc.dao.AadharPanRepository;
import com.kotak.ekyc.model.AadharPanModel;
import com.kotak.ekyc.model.PanCard;
import com.kotak.ekyc.service.PanAadharService;

@Service
public class PanAadharServiceImpl implements PanAadharService {

	@Autowired
	private AadharPanRepository aadharPanRepo;

	@Autowired
	private RestTemplate restTemplate;
	
	HttpHeaders headers = new HttpHeaders();
    
	private String panUrl = "https://sandbox.surepass.io/api/v1/pan/pan";
	private String aadharUrl="https://sandbox.surepass.io/api/v1/aadhaar-v2/generate-otp";
    
	HttpEntity<JSONObject> entity = null;
	String accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzMTcwNzgwMSwianRpIjoiOGRjNzQ2MTgtZWNlZi00NmUxLTk3ZjUtMzMzMzY2ZGM3YjNlIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LnhvcmlhbnRAYWFkaGFhcmFwaS5pbyIsIm5iZiI6MTYzMTcwNzgwMSwiZXhwIjoxNjM0Mjk5ODAxLCJ1c2VyX2NsYWltcyI6eyJzY29wZXMiOlsicmVhZCJdfX0.X4El5xjy2YqrUgUOWgMfvMbVmjVYrVtxqbNQgP6UgAg";
	
	public ResponseEntity<PanCard> consumePanApi() {
		return restTemplate.getForEntity("https://sandbox.surepass.io/api/v1/pan/pan", PanCard.class);
	}

	public String consumePancardApi(JSONObject panCard) {
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Authorization", "Bearer " + accessToken);
		entity = new HttpEntity <JSONObject> (panCard, headers);
		String str=restTemplate.postForObject(panUrl,entity, String.class);
		return str;
	}

	
	public String consumeAadharApi(JSONObject aadharNumber) {
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Authorization", "Bearer " + accessToken);
		entity = new HttpEntity <JSONObject> (aadharNumber, headers);
		String str = restTemplate.postForObject(aadharUrl,entity, String.class);
		return str;
	}

	public AadharPanModel saveDetails(AadharPanModel aadharPan) {
		return aadharPanRepo.save(aadharPan);
	}

	public boolean isDataExist(int request_Id) {
		return aadharPanRepo.existsById(request_Id);
	}

	public void update(AadharPanModel apm) {
		aadharPanRepo.save(apm);
	}

	public AadharPanModel selectSaveRequestId(Integer request_id) {
		// Retrieve Data FROM ONE TABLE
		List<AadharPanModel> aadharPanList = aadharPanRepo.getRequestID(request_id);
		AadharPanModel aadharPan = new AadharPanModel();
		for (AadharPanModel aadharPanModel : aadharPanList) {
			// SAVING DATA INTO ANOTHER TABLE
			aadharPanRepo.save(aadharPanModel);
			aadharPan = aadharPanModel;
		}
		return aadharPan;
	}

	public Long getAccountNumber(int id){
		String prefix = "100100";
		int count = 0;
		int requestId=id;
		while (id != 0) {
			// num = num/10
			id /= 10;
			++count;
		}
		if(count==1){
			prefix+="000";
		}else if(count==2){
			prefix+="00";
		}else if(count==3){
			prefix+="0";
		}
		prefix = prefix+requestId;
		return Long.parseLong(prefix);
	}

	public String getCRN(){
		Random random = new Random();
		char randomizedCharacter = (char) (random.nextInt(26) + 'A');
		return (Long.toString((long)(Math.random() * 1000000000L))+randomizedCharacter);
	}
	
}
