package com.kotak.ekyc.service;

import com.kotak.ekyc.models.AuthenticationProvider;
import com.kotak.ekyc.models.UserAuthentication;
import com.kotak.ekyc.repository.UserAuthenticationRepository;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Date;
import java.util.HashMap;
import java.util.Optional;

@Service
public class UserAuthenticationService {
    @Value("${sms.api.url")
    private String smsApiURL;
    @Value("${sms.api.autheader")
    private String smsAPIAuthHeader;

    @Autowired
    private UserAuthenticationRepository userAuthenticationRepository;

    @Autowired
    private RestTemplate restTemplate;

    public Optional<UserAuthentication> getByEmailId(String email){
        return userAuthenticationRepository.findByEmailId(email);
    }

    public void createNewUserAfterOAuthLoginSuccess(String modeOfAuthentication, String email, AuthenticationProvider provider){

        UserAuthentication userAuthentication = new UserAuthentication();
        userAuthentication.setModeOfAuthentication(modeOfAuthentication);
        userAuthentication.setEmailId(email);
        userAuthentication.setAuth_provider(provider);
        userAuthentication.setLoginStartTime(new Date(new java.util.Date().getTime()));
        userAuthenticationRepository.save(userAuthentication);

    }

    public void updateUserAfterOAuthLoginSuccess(Optional<UserAuthentication> user, String email, AuthenticationProvider google) {
        UserAuthentication userAuthentication = user.get();
        userAuthentication.setEmailId(email);
        userAuthentication.setAuth_provider(google);
        userAuthenticationRepository.save(userAuthentication);
    }

    public JSONObject consumeMobileOTPApi(){
        JSONObject map = new JSONObject();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", smsAPIAuthHeader);
        map.put("route", "q");
        map.put("language", "english");
        map.put("flash", "0");
        String otp = generateRandomOtp();
        map.put("message",otp);

        HttpEntity<JSONObject> entity = new HttpEntity<JSONObject>(map, headers);
        entity.getBody().put("message","OTP for the E-KYC Login : "+otp);
       // String str = restTemplate.postForObject(smsApiURL, entity, String.class);
        String str = "success";
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("otp",otp);
        jsonObject.put("response",str);
        return jsonObject;
    }

    private static String generateRandomOtp() {
        return Double.toString(Math.random()).substring(2,8);
    }
}
