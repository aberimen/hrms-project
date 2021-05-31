package com.aberimen.hrms.candidate.dto;

import java.time.LocalDate;

import com.aberimen.hrms.candidate.Candidate;
import com.aberimen.hrms.user.dto.UserDTO;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CandidateDTO extends UserDTO{
		
	private long id;

	private String name;

	private String lastName;

	private LocalDate dateOfBirth;
	
	
	public CandidateDTO(Candidate candidate) {  // Candidate to CandidateDTO
		super(candidate);
		setId(candidate.getId());
		setName(candidate.getName());
		setLastName(candidate.getLastName());
		setDateOfBirth(candidate.getDateOfBirth());
		
	}

}
