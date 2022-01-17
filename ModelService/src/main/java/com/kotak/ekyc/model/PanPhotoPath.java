package com.kotak.ekyc.model;

import javax.persistence.*;

@Entity
@Table(name = "pan_photo_path")
public class PanPhotoPath {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String photopath;

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

    public PanPhotoPath(Integer id, String photopath, SingleSignInModel singleSignInModel) {
        this.id = id;
        this.photopath = photopath;
        this.singleSignInModel = singleSignInModel;
    }

    public PanPhotoPath(){

    }
}

