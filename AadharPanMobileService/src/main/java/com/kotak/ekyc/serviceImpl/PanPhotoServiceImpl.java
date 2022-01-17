package com.kotak.ekyc.serviceImpl;

import com.kotak.ekyc.dao.PanPhotoRepo;
import com.kotak.ekyc.model.PanPhotoPath;
import com.kotak.ekyc.service.PanPhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PanPhotoServiceImpl implements PanPhotoService {

    @Autowired
    private PanPhotoRepo panPhotoRepo;

    @Override
    public PanPhotoPath savePanPhotoDetails(PanPhotoPath panPhotoPath) {
        return panPhotoRepo.save(panPhotoPath);
    }


}
