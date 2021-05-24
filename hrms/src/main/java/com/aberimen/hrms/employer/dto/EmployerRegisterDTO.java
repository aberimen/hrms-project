package com.aberimen.hrms.employer.dto;

import javax.validation.constraints.NotEmpty;

import com.aberimen.hrms.utils.validation.UniqueEmail;

import lombok.Data;

@Data
public class EmployerRegisterDTO {

	@UniqueEmail
	@NotEmpty
	private String email;
		

	@NotEmpty
	private String password;
	
	@NotEmpty
	private String company;
	
	@NotEmpty
	private String webSite;
	
	@NotEmpty
	private String phoneNumber;	


	
	

}
