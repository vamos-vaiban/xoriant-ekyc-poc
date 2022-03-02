package com.kotak.ekyc.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.kotak.ekyc.dao.SignInRepository;
import com.kotak.ekyc.dao.ekycStatusRepo;
import com.kotak.ekyc.model.SingleSignInModel;
import com.kotak.ekyc.service.SignInService;

@Service
public class SignInServiceImpl implements SignInService{

	@Autowired
	private SignInRepository signInRepository;


	private HttpHeaders headers = new HttpHeaders();

	private static String URL = "https://www.fast2sms.com/dev/bulkV2";
	private String authHeader = "vVqdZRJ4CxW6gjaNwe1bMBpirODXLmTcEoShu25tfYK0QUGkyACHRjOZULq5eyIla9bn0tK4vfE82k3g";
	
	@Autowired
	private RestTemplate restTemplate;

	public String comsumeMobileOtpApi(JSONObject single, SingleSignInModel singleSignInModel) {
		headers.setContentType(MediaType.APPLICATION_JSON);
		//String accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzMTcwNzgwMSwianRpIjoiOGRjNzQ2MTgtZWNlZi00NmUxLTk3ZjUtMzMzMzY2ZGM3YjNlIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LnhvcmlhbnRAYWFkaGFhcmFwaS5pbyIsIm5iZiI6MTYzMTcwNzgwMSwiZXhwIjoxNjM0Mjk5ODAxLCJ1c2VyX2NsYWltcyI6eyJzY29wZXMiOlsicmVhZCJdfX0.X4El5xjy2YqrUgUOWgMfvMbVmjVYrVtxqbNQgP6UgAg";
		headers.set("Authorization", authHeader);
		single.put("route", "q");
		single.put("language", "english");
		single.put("flash", "0");
		String otp = generateRandomOtp();
		single.put("message",otp);
		
		//System.out.println(single.toJSONString());
		
		HttpEntity<JSONObject> entity = new HttpEntity<JSONObject>(single, headers);
		entity.getBody().put("message",generateRandomOtp());
		String str = restTemplate.postForObject(URL, entity, String.class);
		singleSignInModel.setMobile_number_otp(otp);
		System.out.println("output : " +str);
		return str;
	}
	
	private static String generateRandomOtp() {
		return Double.toString(Math.random()).substring(2,8);
	}
	

	public List<SingleSignInModel> getAllDetails() {
		List<SingleSignInModel> listOfDetails = new ArrayList<SingleSignInModel>();
		signInRepository.findAll();
		return listOfDetails;
	}

	public void saveOrUpdate(SingleSignInModel singleSignInModel) {
		signInRepository.save(singleSignInModel);
	}

	public SingleSignInModel saveDetails(SingleSignInModel singleSignInModel) {
		return signInRepository.save(singleSignInModel);
	}

	public void update(SingleSignInModel singleSignInModel) {
		signInRepository.save(singleSignInModel);
	}

	public boolean isDataExist(int id) {
		return signInRepository.existsById(id);
	}
	/*
	 * public boolean isDataExist(int id) { return signRepository.existsById(id); }
	 * 
	 * public Optional<SingleSign> findByRequestId(int request_Id) { return
	 * signRepository.findById(request_Id); }
	 * 
	 * public SingleSign getAllDetailsById(int id) { return
	 * signRepository.findAllById(id).get(); }
	 * 
	 * public void delete(int id) { signRepository.deleteById(id); }
	 */
	
	private static JSONObject getObject() {
		return null;
	}

	public Optional<SingleSignInModel> findByMobileNumber(String mobileNumber){
		return signInRepository.findByMobileNumber(mobileNumber);
	}

}
