package com.kotak.ekyc.repository;

import com.kotak.ekyc.models.UserAuthentication;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserAuthenticationRepository extends CrudRepository<UserAuthentication,Integer> {
    Optional<UserAuthentication> findByMobileNumber(String mobileNumber);
    Optional<UserAuthentication> findByEmailId(String emailId);
}
