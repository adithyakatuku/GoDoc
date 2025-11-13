package com.godoc.service.patient.dto;

import lombok.Data;

@Data
public class RegisterPatientResponse {
    private Long patientId;
    private String patientName;
    private String mobileNumber;
}
