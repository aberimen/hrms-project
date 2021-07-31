package com.aberimen.hrms.candidate.dto;

import javax.validation.constraints.NotEmpty;

import com.aberimen.hrms.user.dto.UpdatedUserDTO;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class UpdatedCandidate extends UpdatedUserDTO{
	
	@NotEmpty
	private String name;

	@NotEmpty
	private String lastName;

	
	


}
