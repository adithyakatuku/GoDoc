package com.godoc.service.branch.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class RegisterBranchRequest {

    @NotBlank(message = "Branch name is required for registration.")
    @Size(max = 64, message = "Branch name must not exceed 64 characters.")
    private String name;

    @Email(message = "Provide a valid email.")
    private String email;

    @NotBlank(message = "Password cannot be empty.")
    @Size(min = 4, message = "Password must be 4 characters at least.")
    private String password;

    @NotBlank(message = "Branch location is required for registration.")
    private String location;

    private List<MultipartFile> images;
}
