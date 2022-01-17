package com.kotak.ekyc.dao;

import com.kotak.ekyc.model.PanPhotoPath;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PanPhotoRepo extends CrudRepository<PanPhotoPath,Integer> {
}
