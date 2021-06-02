package com.aberimen.hrms.resume;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.aberimen.hrms.education.Education;
import com.aberimen.hrms.experience.Experience;
import com.aberimen.hrms.languageskill.LanguageSkill;
import com.aberimen.hrms.technicalskill.TechnicalSkill;

import lombok.Data;

@Data
@Entity
public class Resume {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Education> education;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Experience> experiences;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<LanguageSkill> languageSkills;
	
	private String profileImage;
	
	private String githubAccount;
	
	private String linkedinAccount;
	
	private String summary;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<TechnicalSkill> technicalSkills;
}
