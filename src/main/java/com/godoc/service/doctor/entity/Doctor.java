package com.godoc.service.doctor.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long hospitalId;
    @Column(nullable = false)
    private Long branchId;
    private String name;
    @Column(unique = true)
    private String email;
    private Long credentialsId;
}
