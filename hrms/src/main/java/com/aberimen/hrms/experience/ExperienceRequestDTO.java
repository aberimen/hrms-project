package com.aberimen.hrms.experience;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class ExperienceRequestDTO {

	@NotEmpty
	private String companyName;

	private boolean stillWorking;

	private int jobPositionId;

	@NotNull
	private LocalDate startDate;

	private LocalDate endDate;

}
