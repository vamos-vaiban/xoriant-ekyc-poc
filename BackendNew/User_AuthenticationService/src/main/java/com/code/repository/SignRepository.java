package com.code.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.code.model.SingleSign;

@Repository
public interface SignRepository extends CrudRepository<SingleSign, String> {

	boolean existsById(int id);

	/* boolean existsById(String request_Id); */

	/* public Optional<SingleSign> findByRequestId(int request_Id); */
}
