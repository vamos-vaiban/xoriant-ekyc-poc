package com.kotak.ekyc.model;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class UserDetails {
    @Id
    private int Request_id;
    private String Mode_Of_Authentication;

    private String Aadhar_number;
    private String mobile_number;
    private String pan_number;
    private String Aadhar_Linked_Mobile_no;

    private String House_no;
    private String Address_line_1;
    private String Address_line_2;
    private String Address_line_3;
    private String City;
    private String State;
    private String Landmark;
    private int Pincode;
    private String photopath;
    private String status;
    private Long accountNumber;
    private String crn;
    private Double similarity;

    public UserDetails(){}

    public UserDetails(int request_id, String mode_Of_Authentication, String aadhar_number, String mobile_number, String pan_number, String aadhar_Linked_Mobile_no, String house_no, String address_line_1, String address_line_2, String address_line_3, String city, String state, String landmark, int pincode, String photopath, String status, Long accountNumber, String crn,Double similarity) {
        Request_id = request_id;
        Mode_Of_Authentication = mode_Of_Authentication;
        Aadhar_number = aadhar_number;
        this.mobile_number = mobile_number;
        this.pan_number = pan_number;
        Aadhar_Linked_Mobile_no = aadhar_Linked_Mobile_no;
        House_no = house_no;
        Address_line_1 = address_line_1;
        Address_line_2 = address_line_2;
        Address_line_3 = address_line_3;
        City = city;
        State = state;
        Landmark = landmark;
        Pincode = pincode;
        this.photopath = photopath;
        this.status = status;
        this.accountNumber = accountNumber;
        this.crn = crn;
        this.similarity=similarity;
    }

    public int getRequest_id() {
        return Request_id;
    }

    public void setRequest_id(int request_id) {
        Request_id = request_id;
    }

    public String getMode_Of_Authentication() {
        return Mode_Of_Authentication;
    }

    public void setMode_Of_Authentication(String mode_Of_Authentication) {
        Mode_Of_Authentication = mode_Of_Authentication;
    }

    public String getAadhar_number() {
        return Aadhar_number;
    }

    public void setAadhar_number(String aadhar_number) {
        Aadhar_number = aadhar_number;
    }

    public String getMobile_number() {
        return mobile_number;
    }

    public void setMobile_number(String mobile_number) {
        this.mobile_number = mobile_number;
    }

    public String getPan_number() {
        return pan_number;
    }

    public void setPan_number(String pan_number) {
        this.pan_number = pan_number;
    }

    public String getAadhar_Linked_Mobile_no() {
        return Aadhar_Linked_Mobile_no;
    }

    public void setAadhar_Linked_Mobile_no(String aadhar_Linked_Mobile_no) {
        Aadhar_Linked_Mobile_no = aadhar_Linked_Mobile_no;
    }

    public String getHouse_no() {
        return House_no;
    }

    public void setHouse_no(String house_no) {
        House_no = house_no;
    }

    public String getAddress_line_1() {
        return Address_line_1;
    }

    public void setAddress_line_1(String address_line_1) {
        Address_line_1 = address_line_1;
    }

    public String getAddress_line_2() {
        return Address_line_2;
    }

    public void setAddress_line_2(String address_line_2) {
        Address_line_2 = address_line_2;
    }

    public String getAddress_line_3() {
        return Address_line_3;
    }

    public void setAddress_line_3(String address_line_3) {
        Address_line_3 = address_line_3;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public String getLandmark() {
        return Landmark;
    }

    public void setLandmark(String landmark) {
        Landmark = landmark;
    }

    public int getPincode() {
        return Pincode;
    }

    public void setPincode(int pincode) {
        Pincode = pincode;
    }

    public String getPhotopath() {
        return photopath;
    }

    public void setPhotopath(String photopath) {
        this.photopath = photopath;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getCrn() {
        return crn;
    }

    public void setCrn(String crn) {
        this.crn = crn;
    }

    public Double getSimilarity() {
        return similarity;
    }

    public void setSimilarity(Double similarity) {
        this.similarity = similarity;
    }
}
