package com.aberimen.hrms.employer.dto;

import com.aberimen.hrms.employer.Employer;
import com.aberimen.hrms.user.dto.UserDTO;

import lombok.Data;

@Data
public class EmployerDTO {
	
	private long id;
	
	private String company;
	
	private String webSite;
	
	private String phoneNumber;

	private UserDTO user;
	
	private boolean verified;
	
	public EmployerDTO(Employer employer) {
		setId(employer.getId());
		setCompany(employer.getCompany());
		setWebSite(employer.getWebSite());
		setPhoneNumber(employer.getPhoneNumber());
		setVerified(employer.isVerified());
		setUser(new UserDTO(employer.getUser()));
		
	}
	
	
}
