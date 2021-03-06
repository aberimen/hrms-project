package com.aberimen.hrms.jobposting;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.aberimen.hrms.common.location.Location;
import com.aberimen.hrms.employer.Employer;
import com.aberimen.hrms.jobposition.JobPosition;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class JobPosting {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(columnDefinition = "TEXT")
	@Basic(optional = false)
	private String jobDescription;

	private int minSalary;

	private int maxSalary;

	@Basic(optional = false)
	private int openPositions;

	private LocalDate deadline;

	@ManyToOne
	private Location location;

	@ManyToOne(optional = false)
	private JobPosition jobPosition;

	@ManyToOne
	private Employer employer;

	private LocalDateTime createdAt;

	private boolean active;
	
	@Enumerated(EnumType.ORDINAL)
	private EmploymentType employmentType;
	
	private boolean workRemotely;
}
