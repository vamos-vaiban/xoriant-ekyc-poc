package com.code.service;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.code.model.SingleSign;
import com.code.repository.SignRepository;

@Service
public class SignService {

	@Autowired
	private SignRepository signRepository;

	HttpHeaders headers = new HttpHeaders();

	private String URL = "https://www.fast2sms.com/dev/bulkV2";
	@Autowired
	private RestTemplate restTemplate;

	public String comsumeMobileOtpApi(JSONObject single) {
		headers.setContentType(MediaType.APPLICATION_JSON);
		String accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzMTcwNzgwMSwianRpIjoiOGRjNzQ2MTgtZWNlZi00NmUxLTk3ZjUtMzMzMzY2ZGM3YjNlIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LnhvcmlhbnRAYWFkaGFhcmFwaS5pbyIsIm5iZiI6MTYzMTcwNzgwMSwiZXhwIjoxNjM0Mjk5ODAxLCJ1c2VyX2NsYWltcyI6eyJzY29wZXMiOlsicmVhZCJdfX0.X4El5xjy2YqrUgUOWgMfvMbVmjVYrVtxqbNQgP6UgAg";
		headers.set("Authorization", "Bearer " + accessToken);
		HttpEntity<JSONObject> entity = new HttpEntity<JSONObject>(single, headers);
		String str = restTemplate.postForObject(URL, entity, String.class);
		return str;
	}

	public List<SingleSign> getAllDetails() {
		List<SingleSign> listOfDetails = new ArrayList<SingleSign>();
		signRepository.findAll();
		return listOfDetails;
	}

	public void saveOrUpdate(SingleSign singleSign) {
		signRepository.save(singleSign);
	}

	public SingleSign saveDetails(SingleSign singleSign) {
		return signRepository.save(singleSign);
	}

	public void update(SingleSign singleSign) {
		signRepository.save(singleSign);
	}


	public boolean isDataExist(int request_Id) {
		 return signRepository.existsById(request_Id);
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

}
