package com.godoc.service.doctor;

import com.godoc.service.credentials.UserDetailsImpl;
import com.godoc.service.doctor.dto.RegisterDoctorRequest;
import com.godoc.service.doctor.dto.RegisterDoctorResponse;
import jakarta.validation.Valid;

public interface DoctorService {

    RegisterDoctorResponse registerDoctor(RegisterDoctorRequest request, UserDetailsImpl authenticatedAdministrator) throws Exception;

}
