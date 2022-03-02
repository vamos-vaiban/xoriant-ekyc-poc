package com.kotak.ekyc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kotak.ekyc.model.AadharPanModel;

@Repository
public interface AadharPanRepository extends CrudRepository<AadharPanModel, Integer> {


    @Query(nativeQuery = true, value = "select id from user_identification_values where Aadhar_Linked_Mobile_no :=id")
    List<AadharPanModel> getRequestID(@Param("id") int id);

    @Query(nativeQuery = true, value = "select a.full_name as fullName ,a.date_of_birth as dateOfBirth from user_identification_values a where user_request_id = :requestId")
    DOBModelDao getFullNameAndDOB(@Param("requestId") Integer requestId);
	
}
