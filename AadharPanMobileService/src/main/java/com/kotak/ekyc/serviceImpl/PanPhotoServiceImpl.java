package com.kotak.ekyc.serviceImpl;

import com.kotak.ekyc.dao.PanPhotoRepo;
import com.kotak.ekyc.model.PanPhotoPath;
import com.kotak.ekyc.service.PanPhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PanPhotoServiceImpl implements PanPhotoService {

    @Autowired
    private PanPhotoRepo panPhotoRepo;

    @Override
    public PanPhotoPath savePanPhotoDetails(PanPhotoPath panPhotoPath) {
        return panPhotoRepo.save(panPhotoPath);
    }

    @Override
    public List<PanPhotoPath> findByRequestId(Integer requestId) {
        return panPhotoRepo.findByRequestId(requestId);
    }

    @Override
    public Integer updatePanPhotoDetails(String photopath, double similarity, Integer requestId) {
        return panPhotoRepo.updatePanPhotoDetails(photopath, similarity, requestId);
    }

}
