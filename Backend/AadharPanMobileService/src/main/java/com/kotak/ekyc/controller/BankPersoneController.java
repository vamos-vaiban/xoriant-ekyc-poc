package com.kotak.ekyc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
	@PutMapping("/ekyStatus/{id}")
	public String updateEkycStatus(@PathVariable("id") int id, @RequestBody ekycStatusModel eStatus) {
		Optional<ekycStatusModel> statusData = bankRepo.findById(id);

		if (statusData.isPresent()) {
			ekycStatusModel _status = statusData.get();
			_status.setRequestId(eStatus.getRequestId());
			_status.setStatus(eStatus.getStatus());
			_status.setRejectionReason("Approve");

			ekycStatusModel s = bankRepo.save(_status);

			return (bankRepo.save(_status) != null) ? "Success" : "Not save";

		} else {
			return "Data Not Found";
		}

	}

}
