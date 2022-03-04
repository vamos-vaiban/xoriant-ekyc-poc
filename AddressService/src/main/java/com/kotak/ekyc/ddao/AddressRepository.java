package com.kotak.ekyc.ddao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kotak.ekyc.model.AddressModel;

@Repository
public interface AddressRepository extends JpaRepository<AddressModel, Integer> {

    @Query("select a from AddressModel a where user_request_id = :requestId")
    public  AddressModel findByRequestId(@Param("requestId") int request_id);
}
