package com.aberimen.hrms.employer.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import com.aberimen.hrms.utils.validation.UniqueEmail;

import lombok.Data;

@Data
public class EmployerRegisterDTO {

	@UniqueEmail
	@NotEmpty
	@Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$",message = "geçersiz email")
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
