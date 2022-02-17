package com.kotak.ekyc.service;

import com.kotak.ekyc.models.AuthenticationProvider;
import com.kotak.ekyc.models.UserAuthentication;
import com.kotak.ekyc.repository.UserAuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserAuthenticationService {

    @Autowired
    private UserAuthenticationRepository userAuthenticationRepository;

    public Optional<UserAuthentication> getByEmailId(String email){
        return userAuthenticationRepository.findByEmailId(email);
    }

    public void createNewUserAfterOAuthLoginSuceess(String modeOfAuthentication, String email, AuthenticationProvider provider){

        UserAuthentication userAuthentication = new UserAuthentication();
        userAuthentication.setModeOfAuthentication(modeOfAuthentication);
        userAuthentication.setEmailId(email);
        userAuthentication.setAuth_provider(provider);
        userAuthenticationRepository.save(userAuthentication);

    }

    public void updateUserAfterOAuthLoginSuccess(Optional<UserAuthentication> user, String email, AuthenticationProvider google) {
        UserAuthentication userAuthentication = user.get();
        userAuthentication.setEmailId(email);
        userAuthentication.setAuth_provider(google);
        userAuthenticationRepository.save(userAuthentication);
    }
}
