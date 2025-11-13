package com.godoc.service.patient;

import com.godoc.service.credentials.CredentialService;
import com.godoc.service.credentials.Role;
import com.godoc.service.credentials.entity.Credentials;
import com.godoc.service.patient.dto.RegisterPatientRequest;
import com.godoc.service.patient.dto.RegisterPatientResponse;
import com.godoc.service.patient.entity.Patient;
import com.godoc.service.patient.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private CredentialService credentialService;

    @Override
    public RegisterPatientResponse registerPatient(RegisterPatientRequest request) {

        Credentials credentials = credentialService.generateCredentials(
                request.getMobileNumber(), request.getPassword(), List.of(Role.PATIENT)
        );

        Patient patient = new Patient();
        patient.setName(request.getName());
        patient.setCredentialsId(credentials.getId());
        patientRepository.save(patient);

        RegisterPatientResponse response = new RegisterPatientResponse();
        response.setPatientId(patient.getId());
        response.setPatientName(request.getName());
        response.setMobileNumber(request.getMobileNumber());

        return response;
    }
}
