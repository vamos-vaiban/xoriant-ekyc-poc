package com.kotak.ekyc.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kotak.ekyc.model.SingleSignInModel;

import java.util.Optional;

@Repository
public interface SignInRepository extends CrudRepository<SingleSignInModel, Integer> {

	
	/* boolean existsById(String request_Id); */

	/* public Optional<SingleSign> findByRequestId(int request_Id); */

    public Optional<SingleSignInModel> findByMobileNumber(String mobileNumber);
}
