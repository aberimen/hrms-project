package com.aberimen.hrms.experience;

import java.time.LocalDate;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.aberimen.hrms.jobposition.JobPosition;
import com.aberimen.hrms.resume.Resume;

import lombok.Data;

@Entity
@Data
public class Experience {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Basic(optional = false)
	private String companyName;
	
	@Basic(optional = false)
	private boolean currentJob;
	
	@OneToOne(optional = false)
	private JobPosition jobPosition;
	
	@Basic(optional = false)
	private LocalDate startDate;
	
	private LocalDate endDate;
	
	@ManyToOne
	private Resume resume;
	
	
	
}
