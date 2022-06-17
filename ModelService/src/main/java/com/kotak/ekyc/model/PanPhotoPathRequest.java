package com.kotak.ekyc.model;


public class PanPhotoPathRequest {

    private String path;
    private double similarity;

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path=path;
    }

    public double getSimilarity() {
        return similarity;
    }

    public void setSimilarity(double similarity) {
        this.similarity=similarity;
    }
}
