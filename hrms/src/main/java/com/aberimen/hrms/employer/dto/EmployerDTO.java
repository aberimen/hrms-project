package com.aberimen.hrms.employer.dto;

import com.aberimen.hrms.employer.Employer;
import com.aberimen.hrms.user.dto.UserDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
public class EmployerDTO extends UserDTO{
	
	private String company;
	
	private String webSite;
	
	private String phoneNumber;
	
	private boolean verified;
	
	public EmployerDTO(Employer employer) {
		super(employer);
		setCompany(employer.getCompany());
		setWebSite(employer.getWebSite());
		setPhoneNumber(employer.getPhoneNumber());
		setVerified(employer.isVerified());
		
	}
	
	
}
