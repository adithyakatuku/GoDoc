package com.godoc.service.branch.dto;

import lombok.Data;

@Data
public class RegisterBranchResponse {
    private Long branchId;
    private String branchName;
    private String email;
}
