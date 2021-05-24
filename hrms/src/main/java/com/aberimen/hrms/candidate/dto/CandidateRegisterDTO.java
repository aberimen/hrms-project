package com.aberimen.hrms.candidate.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import com.aberimen.hrms.utils.validation.UniqueEmail;
import com.aberimen.hrms.utils.validation.ValidNationalID;
import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class CandidateRegisterDTO {

	@UniqueEmail
	@NotEmpty
	@Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$",message = "geçersiz email")
	private String email;

	@NotEmpty
	private String password;

	@NotEmpty
	private String name;

	@NotEmpty
	private String lastName;

	@NotNull
	private LocalDate dateOfBirth;
	
	@ValidNationalID // for unique and valid Turkish National ID
	@NotEmpty
	private String nationalId;

}
