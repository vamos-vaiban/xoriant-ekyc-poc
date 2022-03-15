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

    @Query(nativeQuery = true, value = "select a.first_name as firstName ,a.middle_name as middleName ,a.last_name as lastName ,a.date_of_birth as dateOfBirth from user_identification_values a where user_request_id = :requestId")
    DOBModelDao getFullNameAndDOB(@Param("requestId") Integer requestId);

    @Query("select a from AadharPanModel a where user_request_id = :requestId")
    public AadharPanModel findByRequestId(@Param("requestId") int request_id);
}
