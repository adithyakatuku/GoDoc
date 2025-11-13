package com.godoc.service.patient;

import com.godoc.service.patient.dto.RegisterPatientRequest;
import com.godoc.service.patient.dto.RegisterPatientResponse;

public interface PatientService {

    RegisterPatientResponse registerPatient(RegisterPatientRequest request);

}
