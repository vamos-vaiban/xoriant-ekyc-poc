package com.kotak.ekyc.serviceImpl;


import com.kotak.ekyc.controller.PasswordEncoder;
import com.kotak.ekyc.dao.BankPersonnelUserRepo;
import com.kotak.ekyc.model.BankPersonnelUser;
import com.kotak.ekyc.service.BankPersonnelUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class BankPersonnelUserServiceImpl implements BankPersonnelUserService {

    @Autowired
    private BankPersonnelUserRepo bankPersonnelUserRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public BankPersonnelUser saveBankPersonnelUserDetails(BankPersonnelUser bankPersonnelUser) {
        bankPersonnelUser.setPassword(passwordEncoder.encode(bankPersonnelUser.getPassword()));
        bankPersonnelUser.setCreatedDate(new Date(new java.util.Date().getTime()));
        return bankPersonnelUserRepo.save(bankPersonnelUser);
    }

}
