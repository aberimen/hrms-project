package com.aberimen.hrms.education;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.aberimen.hrms.common.department.Department;
import com.aberimen.hrms.common.educationtype.EducationType;
import com.aberimen.hrms.common.language.Language;

import lombok.Data;

@Data
@Entity
public class Education {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String schoolName;
	
	private String educationLevel;
	
	@OneToOne
	private Department department;
	
	@OneToOne
	private EducationType educationType;
	
	@OneToOne
	private Language educationLanguage;
	
	private LocalDate graduationDate;
	
	private LocalDate startDate;
	
	private boolean stillStudying;
}
