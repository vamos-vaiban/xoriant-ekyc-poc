package com.kotak.ekyc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kotak.ekyc.dao.BankPersoneRepo;
import com.kotak.ekyc.dao.BankPersones;
import com.kotak.ekyc.model.BankPersoneReport;
import com.kotak.ekyc.model.ekycStatusModel;
import com.kotak.ekyc.serviceImpl.BankPersoneImpl;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BankPersoneController {

    @Autowired
    private BankPersoneImpl bankPersoneService;

    @Autowired
    private BankPersoneRepo bankRepo;

    @CrossOrigin
    @GetMapping("/getCustomerData")
    public List<BankPersoneReport> getCustomerRegistrationDetails() {

        return bankPersoneService.getData();
        //return null;

    }
    @CrossOrigin
    @PutMapping("/ekyStatus")
    public String updateEkycStatus(@RequestBody ekycStatusModel eStatus) {
        Optional<ekycStatusModel> statusData = bankRepo.findByRequestId(eStatus.getRequestId());
        System.out.println(statusData);
        System.out.println(eStatus);
        if (statusData.isPresent()) {
            ekycStatusModel _status = statusData.get();
            _status.setId(_status.getId());
            _status.setRequestId(eStatus.getRequestId());
            _status.setStatus(eStatus.getStatus());
            _status.setRejectionReason(eStatus.getRejectionReason());

            ekycStatusModel s = bankRepo.save(_status);

            return (bankRepo.save(_status) != null) ? "Success" : "Not save";

        } else {
            return "Data Not Found";
        }

    }

}
