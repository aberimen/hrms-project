package com.aberimen.hrms.candidate.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;

import com.aberimen.hrms.utils.validation.UniqueEmail;
import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class CandidateRegisterDTO {

	@UniqueEmail
	@NotEmpty
	private String email;

	@NotEmpty
	private String password;

	@NotEmpty
	private String name;

	@NotEmpty
	private String lastName;

	@NotNull
	private LocalDate dateOfBirth;
	
	@NotEmpty
	private String nationalId;

}
