package com.kotak.ekyc.service;

import com.kotak.ekyc.model.UserDetails;
import org.springframework.stereotype.Service;

@Service
public interface UserDetailsService {
    public UserDetails getUserDetails(Integer requestId);
}
