package com.kotak.ekyc.dao;

import com.kotak.ekyc.model.BankPersonnelUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BankPersonnelUserRepo extends CrudRepository<BankPersonnelUser,Integer> {

    @Query(value="select b from BankPersonnelUser b where b.emailId=:emailId")
    Optional<BankPersonnelUser> findByEmailId(@Param("emailId") String emailId);
}
