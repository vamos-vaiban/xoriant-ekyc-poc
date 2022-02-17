package com.kotak.ekyc.service;

import com.kotak.ekyc.model.UserAuthentication;
import com.kotak.ekyc.repository.UserAuthenticationRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserService implements UserDetailsService {

    private final UserAuthenticationRepository repository;

    public UserService(UserAuthenticationRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println(username);
        UserAuthentication user = repository.findByMobileNumber(username).orElseThrow(() -> new RuntimeException("User not found: " + username));
        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_USER");
        return new org.springframework.security.core.userdetails.User(user.getMobileNumber(), user.getMobileNumberOtp(), Arrays.asList(authority));
    }
}
