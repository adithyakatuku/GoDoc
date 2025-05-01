package com.godoc.service.hospital.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Calendar;
import java.util.List;

@Data
@Entity
public class Hospital {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true)
    private String email;
    private Long credentialsId;
    private String logo;
    private String founders;
    private Calendar foundationDate;
    private String motto;
    private String description;
}
