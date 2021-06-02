package com.aberimen.hrms.candidateprofile;

import java.util.List;

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
public class CandidateProfile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToMany
	private List<Education> educationDetails;
	
	@OneToMany
	private List<Experience> experiences;
	
	@OneToMany
	private List<LanguageSkill> languageSkills;
	
	private String profileImage;
	
	private String githubAccount;
	
	private String linkedinAccount;
	
	private String aboutMe;
	
	@OneToMany
	private List<TechnicalSkill> technicalSkills;
}
