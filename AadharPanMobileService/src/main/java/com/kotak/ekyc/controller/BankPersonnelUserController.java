package com.kotak.ekyc.controller;

import com.kotak.ekyc.dao.BankPersonnelUserRepo;
import com.kotak.ekyc.model.BankPersonnelUser;
import com.kotak.ekyc.model.LoginResponse;
import com.kotak.ekyc.service.BankPersonnelUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@CrossOrigin
public class BankPersonnelUserController {

    @Autowired
    private BankPersonnelUserService bankPersonnelUserService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private BankPersonnelUserRepo bankPersonnelUserRepo;

    @PostMapping("/saveBankPersonnelUser")
    public ResponseEntity<BankPersonnelUser> saveBankPersonnelUser(@RequestBody BankPersonnelUser bankPersonnelUser){
        System.out.println("bankPersonnelObject Controller:" + bankPersonnelUser);
        bankPersonnelUserService.saveBankPersonnelUserDetails(bankPersonnelUser);
        return new ResponseEntity<BankPersonnelUser>(bankPersonnelUser, HttpStatus.OK);
    }

    @PostMapping("/bankPersonnelLogin")
    public LoginResponse bankPersonnelLogin(@RequestParam(value = "emailId") String userName, @RequestParam(value = "password") String password) {
        Optional<BankPersonnelUser> bankPersonnelUser = bankPersonnelUserRepo.findByEmailId(userName);
        System.out.println("bankPersonnelUser:" + bankPersonnelUser);
        LoginResponse loginResponse = new LoginResponse();
        if(bankPersonnelUser.isPresent())
        {
            boolean passwordMatch= passwordEncoder.matches(password,bankPersonnelUser.get().getPassword());
            System.out.println("passwordMatch:" + passwordMatch);
            if(passwordMatch)
            {
                loginResponse.setBankPersonnelUserId(bankPersonnelUser.get().getId());
                loginResponse.setStatus(true);
                loginResponse.setMessage("Login Successfully");
            }
            else{
                loginResponse.setBankPersonnelUserId(bankPersonnelUser.get().getId());
                loginResponse.setStatus(false);
                loginResponse.setMessage("Password not match");
            }
        }
        else
        {
            loginResponse.setStatus(false);
            loginResponse.setMessage("Username not found");
        }
        return loginResponse;
    }
}
