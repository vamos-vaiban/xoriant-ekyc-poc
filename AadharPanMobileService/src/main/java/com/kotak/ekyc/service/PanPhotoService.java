package com.kotak.ekyc.service;

import com.kotak.ekyc.model.PanPhotoPath;
import org.springframework.stereotype.Service;


public interface PanPhotoService {

    public PanPhotoPath savePanPhotoDetails(PanPhotoPath panPhotoPath);
}
