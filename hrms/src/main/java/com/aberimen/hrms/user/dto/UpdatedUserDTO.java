package com.aberimen.hrms.user.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.aberimen.hrms.utils.validation.UniqueEmail;

import lombok.Data;

@Data
@UniqueEmail
public class UpdatedUserDTO {
	
	@NotNull
	private Long id;
	
	@NotEmpty
	@Email
	private String email;

}
