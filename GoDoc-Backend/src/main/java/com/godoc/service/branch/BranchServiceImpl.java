package com.godoc.service.branch;

import com.godoc.service.branch.dto.RegisterBranchRequest;
import com.godoc.service.branch.dto.RegisterBranchResponse;
import com.godoc.service.branch.entity.Branch;
import com.godoc.service.branch.entity.BranchImage;
import com.godoc.service.branch.repository.BranchImageRepository;
import com.godoc.service.branch.repository.BranchRepository;
import com.godoc.service.common.S3Utils;
import com.godoc.service.credentials.CredentialService;
import com.godoc.service.credentials.Role;
import com.godoc.service.credentials.UserDetailsImpl;
import com.godoc.service.credentials.entity.Credentials;
import com.godoc.service.hospital.entity.Hospital;
import com.godoc.service.hospital.repository.HospitalRepository;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;

@Service
public class BranchServiceImpl implements BranchService{

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private BranchImageRepository branchImageRepository;

    @Autowired
    private CredentialService credentialService;

    @PreAuthorize("hasAuthority('HOSPITAL')")
    @Override
    public RegisterBranchResponse registerBranch(RegisterBranchRequest request, UserDetailsImpl authenticatedHospital) throws Exception {

        Credentials credentials = credentialService.generateCredentials(
                request.getEmail(), request.getPassword(),
                Arrays.stream(Role.values())
                        .filter(role -> !role.equals(Role.HOSPITAL) && !role.equals(Role.PATIENT))
                        .toList()
        );

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
