package com.kotak.ekyc.service;

import com.kotak.ekyc.model.ekycStatusModel;

import java.util.Optional;

public interface ekycStatus {
	public void save(ekycStatusModel kycstatus);
	public Optional<ekycStatusModel> findByRequestId(Integer requestId);
}
