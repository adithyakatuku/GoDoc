package com.godoc.service.doctor.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterDoctorRequest {

    @NotBlank(message = "Branch name is required for registration.")
    @Size(max = 64, message = "Branch name must not exceed 64 characters.")
    private String name;

    @Email(message = "Provide a valid email.")
    private String email;

    @NotBlank(message = "Password cannot be empty.")
    @Size(min = 4, message = "Password must be 4 characters at least.")
    private String password;

    private Long branchId;
}
