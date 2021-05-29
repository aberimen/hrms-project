package com.aberimen.hrms.jobposting;

import java.time.LocalDate;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToOne;

import com.aberimen.hrms.employer.Employer;
import com.aberimen.hrms.jobposition.JobPosition;
import com.aberimen.hrms.location.Location;

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

	@Lob
	@Basic(optional = false)
	private String jobDescription;

	private int minSalary;

	private int maxSalary;

	@Basic(optional = false)
	private int openPositions;

	private LocalDate deadline;

	@OneToOne
	private Location location;

	@OneToOne(optional = false)
	private JobPosition jobPosition;

	@OneToOne
	private Employer employer;

	private LocalDate postedAt;

	boolean active;
}
