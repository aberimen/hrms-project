package com.aberimen.hrms.candidate.dto;

import java.time.LocalDate;

import com.aberimen.hrms.candidate.Candidate;
import com.aberimen.hrms.user.dto.UserDTO;

import lombok.Data;

@Data
public class CandidateDTO {
		
	private long id;

	private String name;

	private String lastName;

	private LocalDate dateOfBirth;
	
	private UserDTO user;
	
	public CandidateDTO(Candidate candidate) {  // Candidate to CandidateDTO
		
		setId(candidate.getId());
		setName(candidate.getName());
		setLastName(candidate.getLastName());
		setDateOfBirth(candidate.getDateOfBirth());
		setUser(new UserDTO(candidate.getUser()));
	}

}
