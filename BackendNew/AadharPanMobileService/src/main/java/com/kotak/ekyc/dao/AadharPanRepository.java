package com.kotak.ekyc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kotak.ekyc.model.AadharPanModel;

@Repository
public interface AadharPanRepository extends CrudRepository<AadharPanModel, Integer> {


    @Query(nativeQuery = true, value = "select id from user_identification_values")
    List<AadharPanModel> getRequestID(@Param("id") int id); 
}
