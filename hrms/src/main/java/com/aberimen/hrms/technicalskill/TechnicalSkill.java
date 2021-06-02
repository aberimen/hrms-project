package com.aberimen.hrms.technicalskill;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.aberimen.hrms.common.techstack.TechStack;

import lombok.Data;

@Data
@Entity
public class TechnicalSkill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToOne
	private TechStack techStack;
}
