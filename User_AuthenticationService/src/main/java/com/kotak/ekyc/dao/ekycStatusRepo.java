package com.kotak.ekyc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kotak.ekyc.model.ekycStatusModel;

import java.util.Optional;

@Repository
public interface ekycStatusRepo extends JpaRepository<ekycStatusModel, Integer> {

    public Optional<ekycStatusModel> findByRequestId(Integer requestId);
	
}
