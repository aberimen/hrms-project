package com.aberimen.hrms.education;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.aberimen.hrms.common.department.Department;
import com.aberimen.hrms.common.language.Language;
import com.aberimen.hrms.common.university.University;
import com.aberimen.hrms.resume.Resume;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
public class Education {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String schoolName;

	@Enumerated(EnumType.ORDINAL)
	private EducationLevel educationLevel;

	@ManyToOne
	private University university;

	@ManyToOne
	private Department department;

	@Enumerated(EnumType.ORDINAL)
	private EducationType educationType;

	@ManyToOne
	private Language educationLanguage;

	private LocalDate graduationDate;

	private LocalDate startDate;

	private boolean stillStudying;

	@JsonIgnore
	@ManyToOne
	private Resume resume;
}
