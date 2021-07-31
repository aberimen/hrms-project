package com.aberimen.hrms.user.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import com.aberimen.hrms.utils.validation.UniqueEmail;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class UserRegisterRequest {
	
	@JsonIgnore
	private long id;
	
	@NotEmpty
	@Email
	@UniqueEmail
	private String email;

	@NotEmpty
	private String password;

}
