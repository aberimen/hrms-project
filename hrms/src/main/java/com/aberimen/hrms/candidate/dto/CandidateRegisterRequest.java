package com.aberimen.hrms.candidate.dto;

import javax.validation.constraints.NotEmpty;

import com.aberimen.hrms.user.dto.UserRegisterRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CandidateRegisterRequest extends UserRegisterRequest {

	@NotEmpty
	private String name;

	@NotEmpty
	private String lastName;

	@NotEmpty
	private String yearOfBirth;

	@NotEmpty
	private String nationalId;

}
