package com.aberimen.hrms.employer.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class AccountDetailsUpdatedDTO {

	@NotEmpty
	private String company;

	@NotEmpty
	private String website;

	@NotEmpty
	private String phoneNumber;

	@Email
	private String email;

}
