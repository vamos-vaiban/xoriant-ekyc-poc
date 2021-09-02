package com.code.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.code.model.AadharPanModel;

@Repository
public interface AadharPanRepository extends CrudRepository<AadharPanModel, Integer> {

	
}
