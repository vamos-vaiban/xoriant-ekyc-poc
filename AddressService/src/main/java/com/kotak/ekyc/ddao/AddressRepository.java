package com.kotak.ekyc.ddao;

import com.kotak.ekyc.model.City;
import com.kotak.ekyc.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kotak.ekyc.model.AddressModel;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<AddressModel, Integer> {

    @Query("select a from AddressModel a where user_request_id = :requestId")
    public  AddressModel findByRequestId(@Param("requestId") int request_id);

    @Query("select s from State s")
    List<State> findAllState();

    @Query("select c from City c where state_id = :state_id")
    List<City> findAllCityByStateId(@Param("state_id") int stateId);
}
