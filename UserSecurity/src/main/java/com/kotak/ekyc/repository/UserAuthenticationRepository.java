package com.kotak.ekyc.repository;

import com.kotak.ekyc.model.UserAuthentication;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserAuthenticationRepository extends CrudRepository<UserAuthentication,Integer> {
    Optional<UserAuthentication> findByMobileNumber(String mobileNumber);
}
