package com.kotak.ekyc.models;

import lombok.Data;

@Data
public class LoginResponse {
    private boolean status;
    private Integer requestId;
    private String JSESSIONID;
    private String message;

}
