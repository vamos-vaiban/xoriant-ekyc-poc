package com.kotak.ekyc.config;

import com.kotak.ekyc.models.AuthenticationProvider;
import com.kotak.ekyc.models.UserAuthentication;
import com.kotak.ekyc.service.UserAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@Component
public class OAuth2LoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    @Autowired
    private UserAuthenticationService userAuthenticationService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        CustomOAuth2User customOAuth2User =(CustomOAuth2User) authentication.getPrincipal();
        String email = customOAuth2User.getEmail();
        Optional<UserAuthentication> user = userAuthenticationService.getByEmailId(email);
        if(user.isPresent()){
            userAuthenticationService.updateUserAfterOAuthLoginSuccess(user, email, AuthenticationProvider.GOOGLE);
        }else{

            userAuthenticationService.createNewUserAfterOAuthLoginSuccess("Via-Email", email, AuthenticationProvider.GOOGLE);
        }
        super.onAuthenticationSuccess(request, response, authentication);
    }
}
