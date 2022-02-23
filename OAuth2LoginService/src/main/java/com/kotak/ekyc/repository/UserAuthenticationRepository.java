package com.kotak.ekyc.repository;

import com.kotak.ekyc.models.UserAuthentication;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserAuthenticationRepository extends CrudRepository<UserAuthentication,Integer> {
    Optional<UserAuthentication> findByRequestId(Integer requestId);
    Optional<UserAuthentication> findByEmailId(String emailId);

    @Transactional
    @Modifying
    @Query(value="update UserAuthentication p set p.mobileNumber=:mobileNumber , p.mobileNumberOtp=:mobileNumberOtp where p.requestId=:request_Id")
    public Integer updateMobileNumberAndOTP(@Param("mobileNumber") String mobileNumber, @Param("mobileNumberOtp") String mobileNumberOtp, @Param("request_Id") Integer requestId);
}
