package com.kotak.ekyc.service;

import com.kotak.ekyc.model.BankPersonnelUser;
import org.springframework.stereotype.Service;

@Service
public interface BankPersonnelUserService {

    public BankPersonnelUser saveBankPersonnelUserDetails(BankPersonnelUser bankPersonnelUser);

}
