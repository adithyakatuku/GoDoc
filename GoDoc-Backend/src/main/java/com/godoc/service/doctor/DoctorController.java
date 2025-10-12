package com.godoc.service.doctor;

import com.godoc.service.credentials.UserDetailsImpl;
import com.godoc.service.doctor.dto.RegisterDoctorRequest;
import com.godoc.service.doctor.dto.RegisterDoctorResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hospital/branch/doctor")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/hello")
    public String getConnection() {
        return "Hello world";
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterDoctorResponse> registerDoctor(@Valid @RequestBody RegisterDoctorRequest request) throws Exception {
        UserDetailsImpl authenticatedAdministrator = (UserDetailsImpl) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        RegisterDoctorResponse response = doctorService.registerDoctor(request, authenticatedAdministrator);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
