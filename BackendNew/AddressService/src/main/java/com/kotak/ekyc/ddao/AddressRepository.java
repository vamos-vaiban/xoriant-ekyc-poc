package com.kotak.ekyc.ddao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kotak.ekyc.model.AddressModel;

@Repository
public interface AddressRepository extends JpaRepository<AddressModel, Integer> {

}
