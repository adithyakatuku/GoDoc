package com.godoc.service.doctor;

import com.godoc.service.branch.entity.Branch;
import com.godoc.service.branch.repository.BranchRepository;
import com.godoc.service.credentials.Role;
import com.godoc.service.credentials.UserDetailsImpl;
import com.godoc.service.credentials.entity.Credentials;
import com.godoc.service.credentials.repository.CredentialsRepository;
import com.godoc.service.doctor.dto.RegisterDoctorRequest;
import com.godoc.service.doctor.dto.RegisterDoctorResponse;
import com.godoc.service.doctor.entity.Doctor;
import com.godoc.service.doctor.repository.DoctorRepository;
import com.godoc.service.exceptions.InvalidArgumentException;
import com.godoc.service.exceptions.ResourceNotFoundException;
import com.godoc.service.hospital.entity.Hospital;
import com.godoc.service.hospital.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class DoctorServiceImpl implements DoctorService{

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private CredentialsRepository credentialsRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);

    @PreAuthorize("hasAnyAuthority('HOSPITAL', 'BRANCH')")
    @Override
    public RegisterDoctorResponse registerDoctor(RegisterDoctorRequest request, UserDetailsImpl authenticatedAdministrator) throws Exception {

        long hospitalId, branchId;
        boolean registeredByHospital = authenticatedAdministrator.getAuthorities().contains(Role.HOSPITAL);
        if (registeredByHospital) {
            Hospital hospital = hospitalRepository.findByEmail(request.getEmail());
            if (request.getBranchId() == null)
                throw new InvalidArgumentException("No branch details provided to register the doctor.");

            Branch branch = branchRepository.findById(request.getBranchId()).orElseThrow(
                    () -> new ResourceNotFoundException("No branch found with id " + request.getBranchId())
            );
            if (!Objects.equals(branch.getHospitalId(), hospital.getId()))
                throw new InvalidArgumentException("Invalid branch details provided to register the doctor. Branch do not belong to the hospital.");

            hospitalId = hospital.getId();
            branchId = branch.getId();
        } else {
            Branch branch = branchRepository.findByEmail(request.getEmail());
            hospitalId = branch.getHospitalId();
            branchId = branch.getId();
        }

        Credentials credentials = new Credentials();
        credentials.setUsername(request.getEmail());
        credentials.setPassword(passwordEncoder.encode(request.getPassword()));
        credentials.setRoles(List.of(Role.DOCTOR.name()));
        credentialsRepository.save(credentials);

        Doctor doctor = new Doctor();
        doctor.setName(request.getName());
        doctor.setHospitalId(hospitalId);
        doctor.setBranchId(branchId);
        doctor.setEmail(request.getEmail());
        doctor.setCredentialsId(credentials.getId());
        doctorRepository.save(doctor);

        RegisterDoctorResponse response = new RegisterDoctorResponse();
        response.setDoctorId(doctor.getId());
        response.setDoctorName(doctor.getName());
        response.setEmail(doctor.getEmail());

        return response;
    }

}
