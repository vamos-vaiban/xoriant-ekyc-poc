package com.kotak.ekyc.dao;

import com.kotak.ekyc.model.UserDetails;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserDetailsRepository extends CrudRepository<UserDetails,Integer> {
    @Query(nativeQuery = true, value = "Select UA.Request_id, UA.Mode_Of_Authentication, UI.Aadhar_number, UI.mobile_number, UI.pan_number, UI.Aadhar_Linked_Mobile_no, UC.House_no, UC.Address_line_1, UC.Address_line_2, UC.Address_line_3, UC.City, UC.State, UC.Landmark, UC.Pincode, pp.photopath, pp.similarity, em.status,UI.account_number,UI.crn_number AS crn  from user_authentication UA"
            + " join user_identification_values UI on UI.user_Request_id = UA.Request_id"
            + " join user_communication_address UC on UC.user_Request_id = UA.Request_id"
            + " join pan_photo_path pp on pp.request_id=UA.Request_id"
            + " join ekyc_status_model em on em.request_id=UA.Request_id where UA.Request_id=:requestId")
    public UserDetails getUserData(@Param("requestId") Integer requestId);
}
