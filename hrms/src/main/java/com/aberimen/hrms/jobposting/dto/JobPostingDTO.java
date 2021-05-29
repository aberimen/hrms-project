package com.aberimen.hrms.jobposting.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class JobPostingDTO {
	
	private int jobPositionId; 
	
	@NotEmpty
	private String jobDescription;	
	
	private int locationId;
	
	private int minSalary;
	
	private int maxSalary;
	
	private int openPositions;
	
	private LocalDate deadline;
	
	private int employerId;

}
