package com.godoc.service.branch;

import com.godoc.service.branch.dto.RegisterBranchRequest;
import com.godoc.service.branch.dto.RegisterBranchResponse;
import com.godoc.service.credentials.UserDetailsImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hospital/branch")
public class BranchController {

    @Autowired
    private BranchService branchService;

    @GetMapping("/hello")
    public String getConnection() {
        return "Hello world";
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterBranchResponse> registerBranch(@Valid @RequestBody RegisterBranchRequest request) throws Exception {
        UserDetailsImpl authenticatedHospital = (UserDetailsImpl) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        RegisterBranchResponse response = branchService.registerBranch(request, authenticatedHospital);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
