package com.kotak.ekyc.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomOAuth2UserService customOAuth2UserService;

    @Autowired
    private OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.
                //antMatcher("/**").
                authorizeRequests().
                anyRequest().
                authenticated().
                and().oauth2Login().
                userInfoEndpoint().
                userService(customOAuth2UserService)
                .and().successHandler(oAuth2LoginSuccessHandler);
    }


}
