package com.godoc.service.branch.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long hospitalId;
    private String name;
    @Column(unique = true)
    private String email;
    private Long credentialsId;
    private String location;
}
