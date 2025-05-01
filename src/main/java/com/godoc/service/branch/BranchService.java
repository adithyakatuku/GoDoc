package com.godoc.service.branch;

import com.godoc.service.branch.dto.RegisterBranchRequest;
import com.godoc.service.branch.dto.RegisterBranchResponse;
import com.godoc.service.credentials.UserDetailsImpl;

public interface BranchService {

    RegisterBranchResponse registerBranch(RegisterBranchRequest request, UserDetailsImpl authenticatedHospital) throws Exception;

}
