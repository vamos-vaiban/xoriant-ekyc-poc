package com.kotak.ekyc.service;

import com.kotak.ekyc.model.PanPhotoPath;
import org.springframework.stereotype.Service;

import java.util.List;


public interface PanPhotoService {

    public PanPhotoPath savePanPhotoDetails(PanPhotoPath panPhotoPath);
    public List<PanPhotoPath> findByRequestId(Integer requestId);
    Integer updatePanPhotoDetails(String photopath, double similarity, Integer requestId);
}
