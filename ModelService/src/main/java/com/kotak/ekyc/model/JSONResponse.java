package com.kotak.ekyc.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JSONResponse {
    private boolean status;
    private String message;
}
