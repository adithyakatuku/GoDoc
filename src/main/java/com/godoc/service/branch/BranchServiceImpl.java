package com.godoc.service.branch;

import com.godoc.service.branch.dto.RegisterBranchRequest;
import com.godoc.service.branch.dto.RegisterBranchResponse;
import com.godoc.service.branch.entity.Branch;
import com.godoc.service.branch.entity.BranchImage;
import com.godoc.service.branch.repository.BranchImageRepository;
import com.godoc.service.branch.repository.BranchRepository;
import com.godoc.service.common.S3Utils;
import com.godoc.service.credentials.Role;
import com.godoc.service.credentials.UserDetailsImpl;
import com.godoc.service.credentials.entity.Credentials;
import com.godoc.service.credentials.repository.CredentialsRepository;
import com.godoc.service.hospital.entity.Hospital;
import com.godoc.service.hospital.repository.HospitalRepository;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;

public class BranchServiceImpl implements BranchService{

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private BranchImageRepository branchImageRepository;

    @Autowired
    private CredentialsRepository credentialsRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);

    @Override
    public RegisterBranchResponse registerBranch(RegisterBranchRequest request, UserDetailsImpl authenticatedHospital) throws Exception {

        Credentials credentials = new Credentials();
        credentials.setUsername(request.getEmail());
        credentials.setPassword(passwordEncoder.encode(request.getPassword()));
        credentials.setRoles(
                Arrays.stream(Role.values())
                        .map(Enum::name)
                        .toList()
        );
        credentialsRepository.save(credentials);

        Hospital hospital = hospitalRepository.findByEmail(authenticatedHospital.getUsername());

        Branch branch = new Branch();
        branch.setName(request.getName());
        branch.setHospitalId(hospital.getId());
        branch.setCredentialsId(credentials.getId());
        branch.setEmail(request.getEmail());
        branch.setLocation(request.getLocation());

        branchRepository.save(branch);

        String basePath = "branch/" + branch.getId().toString();
        if (CollectionUtils.isNotEmpty(request.getImages())) {
            for (MultipartFile image : request.getImages()) {
                BranchImage branchImage = new BranchImage();

                branchImage.setBranchId(branch.getId());
                String path = basePath + "/images/" + image.getOriginalFilename();
                branchImage.setS3Url(S3Utils.uploadMultipartFileToS3(path, image));

                branchImageRepository.save(branchImage);
            }
        }

        RegisterBranchResponse response = new RegisterBranchResponse();
        response.setBranchId(branch.getId());
        response.setBranchName(branch.getName());
        response.setEmail(branch.getEmail());

        return response;
    }
}
