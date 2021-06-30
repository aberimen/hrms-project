package com.aberimen.hrms.education;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class EducationDTO {
	
	private long id;
	
	@NotEmpty
	private EducationLevel educationLevel;
	
	private String schoolName;
	
	private int universityId;
	
	private int departmentId;
	
	private EducationType educationType;
	
	private int educationLanguageId;
	
	private LocalDate startDate;

	private LocalDate graduationDate;

	private boolean stillStudying;

}
