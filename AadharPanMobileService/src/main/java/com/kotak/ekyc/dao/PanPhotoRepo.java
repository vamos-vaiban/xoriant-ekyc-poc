package com.kotak.ekyc.dao;

import com.kotak.ekyc.model.PanPhotoPath;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface PanPhotoRepo extends CrudRepository<PanPhotoPath,Integer> {

    @Query("select p from PanPhotoPath p where p.singleSignInModel.request_Id=:requestId")
    public List<PanPhotoPath> findByRequestId(@Param("requestId") Integer requestId);

    @Transactional
    @Modifying
    @Query(value="update PanPhotoPath p set p.photopath=:photopath , p.similarity=:similarity , p.singleSignInModel.request_Id=:request_Id where p.singleSignInModel.request_Id=:request_Id")
    public Integer updatePanPhotoDetails(@Param("photopath") String photopath, @Param("similarity") double similarity, @Param("request_Id") Integer requestId);
}
