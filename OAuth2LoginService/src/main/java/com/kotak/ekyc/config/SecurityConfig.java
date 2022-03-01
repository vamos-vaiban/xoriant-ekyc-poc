package com.kotak.ekyc.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;


@Configuration
//@EnableResourceServer
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomOAuth2UserService customOAuth2UserService;

    @Autowired
    private OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().
                antMatcher("/**").
                authorizeRequests().
                anyRequest().
                authenticated().
                and().oauth2Login().
                defaultSuccessUrl("/login/google").
                userInfoEndpoint().
                userService(customOAuth2UserService)
                .and().successHandler(oAuth2LoginSuccessHandler);
    }
    @Override
    public void configure(WebSecurity webSecurity) throws Exception {
        webSecurity.ignoring().antMatchers(HttpMethod.OPTIONS,"/**");
    }

}
