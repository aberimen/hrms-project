package com.aberimen.hrms.jobposting.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;

import com.aberimen.hrms.jobposting.EmploymentType;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class JobPostingDTO {
	
	@JsonIgnore
	private long id;
	
	private int jobPositionId; 
	
	@NotEmpty
	private String jobDescription;	
	
	private int locationId;
	
	private int minSalary;
	
	private int maxSalary;
	
	private int openPositions;
	
	private LocalDate deadline;
	
	private int employerId;
	
	private EmploymentType employmentType;
	
	private boolean workRemotely;

}
