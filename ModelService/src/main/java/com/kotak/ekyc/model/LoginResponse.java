package com.kotak.ekyc.model;

public class LoginResponse {

    private boolean status;
    private String message;
    private int bankPersonnelUserId;

    public LoginResponse(boolean status, String message, int bankPersonnelUserId) {
        this.status = status;
        this.message = message;
        this.bankPersonnelUserId = bankPersonnelUserId;
    }

    public int getBankPersonnelUserId() {
        return bankPersonnelUserId;
    }

    public void setBankPersonnelUserId(int bankPersonnelUserId) {
        this.bankPersonnelUserId = bankPersonnelUserId;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LoginResponse() {
    }
}
