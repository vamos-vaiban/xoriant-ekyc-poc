package com.kotak.ekyc.model;

import javax.persistence.*;

@Entity
@Table(name = "pan_photo_path")
public class PanPhotoPath {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String photopath;
    private double similarity;

    @OneToOne
    @JoinColumn(name = "request_id")
    private SingleSignInModel singleSignInModel;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhotopath() {
        return photopath;
    }

    public void setPhotopath(String photopath) {
        this.photopath = photopath;
    }

    public SingleSignInModel getSingleSignInModel() {
        return singleSignInModel;
    }

    public void setSingleSignInModel(SingleSignInModel singleSignInModel) {
        this.singleSignInModel = singleSignInModel;
    }

    public double getSimilarity() {
        return similarity;
    }

    public void setSimilarity(double similarity) {
        this.similarity = similarity;
    }

    public PanPhotoPath(Integer id, String photopath, SingleSignInModel singleSignInModel ,double similarity) {
        this.id = id;
        this.photopath = photopath;
        this.singleSignInModel = singleSignInModel;
        this.similarity = similarity;
    }

    public PanPhotoPath(){

    }
}

