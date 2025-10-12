package com.godoc.service.doctor.dto;

import lombok.Data;

@Data
public class RegisterDoctorResponse {
    private Long doctorId;
    private String doctorName;
    private String email;
}
