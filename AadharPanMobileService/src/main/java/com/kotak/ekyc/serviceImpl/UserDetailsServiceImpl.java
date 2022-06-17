package com.kotak.ekyc.serviceImpl;

import com.kotak.ekyc.dao.UserDetailsRepository;
import com.kotak.ekyc.model.UserDetails;
import com.kotak.ekyc.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Override
    public UserDetails getUserDetails(Integer requestId) {
        return userDetailsRepository.getUserData(requestId);
    }
}
