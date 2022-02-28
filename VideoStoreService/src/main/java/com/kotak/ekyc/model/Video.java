package com.kotak.ekyc.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Video {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private String s3URL;


}
