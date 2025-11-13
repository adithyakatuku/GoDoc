package com.godoc.service.patient;

import com.godoc.service.patient.dto.RegisterPatientRequest;
import com.godoc.service.patient.dto.RegisterPatientResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;

    public ResponseEntity<RegisterPatientResponse> registerPatient(@Valid @RequestBody RegisterPatientRequest request) {
        RegisterPatientResponse response = patientService.registerPatient(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
