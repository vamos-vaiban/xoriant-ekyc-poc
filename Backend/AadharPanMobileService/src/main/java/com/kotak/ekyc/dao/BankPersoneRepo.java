package com.kotak.ekyc.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kotak.ekyc.model.ekycStatusModel;

@Repository
public interface BankPersoneRepo extends CrudRepository<ekycStatusModel, Integer> {

	Optional<ekycStatusModel> findById(int id);

	
}
