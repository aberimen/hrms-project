package com.aberimen.hrms.jobposting.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.aberimen.hrms.common.location.Location;
import com.aberimen.hrms.employer.dto.EmployerDTO;
import com.aberimen.hrms.jobposition.JobPosition;
import com.aberimen.hrms.jobposting.JobPosting;

import lombok.Data;

@Data
public class JobPostingResponseDTO {

	private long id;
	
	private String jobDescription;

	private int minSalary;

	private int maxSalary;

	private int openPositions;

	private LocalDate deadline;

	private Location location;

	private JobPosition jobPosition;
	
	private EmployerDTO employer;

	private LocalDateTime createdAt;

	boolean active;
	
	public JobPostingResponseDTO(JobPosting jobPosting) {
		setId(jobPosting.getId());
		setJobDescription(jobPosting.getJobDescription());
		setMinSalary(jobPosting.getMinSalary());
		setMaxSalary(jobPosting.getMaxSalary());
		setOpenPositions(jobPosting.getOpenPositions());
		setDeadline(jobPosting.getDeadline());
		setLocation(jobPosting.getLocation());
		setJobPosition(jobPosting.getJobPosition());
		setEmployer(new EmployerDTO(jobPosting.getEmployer()));
		setCreatedAt(jobPosting.getCreatedAt());
		setActive(jobPosting.isActive());
		
	}
}
