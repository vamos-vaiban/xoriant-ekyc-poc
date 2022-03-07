package com.kotak.ekyc.model;


public class PanPhotoPathRequest {

    private String photourl;
    private String aadhaarurl;
    private double similarity;

    public String getPhotourl() {
        return photourl;
    }

    public void setPhotourl(String photourl) {
        this.photourl = photourl;
    }

    public String getAadhaarurl() {
        return aadhaarurl;
    }

    public void setAadhaarurl(String aadhaarurl) {
        this.aadhaarurl = aadhaarurl;
    }

    public double getSimilarity() {
        return similarity;
    }

    public void setSimilarity(double similarity) {
        this.similarity=similarity;
    }
}
