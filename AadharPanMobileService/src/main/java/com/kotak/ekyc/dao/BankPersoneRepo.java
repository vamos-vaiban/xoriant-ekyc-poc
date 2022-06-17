package com.kotak.ekyc.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kotak.ekyc.model.ekycStatusModel;

@Repository
public interface BankPersoneRepo extends CrudRepository<ekycStatusModel, Long> {

    Optional<ekycStatusModel> findById(long id);

    @Query(value="select e from ekycStatusModel e where e.requestId=:requestId")
    Optional<ekycStatusModel> findByRequestId(@Param("requestId") int requestId);

}