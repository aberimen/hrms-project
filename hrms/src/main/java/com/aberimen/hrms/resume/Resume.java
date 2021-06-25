package com.aberimen.hrms.resume;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;

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

	@OrderBy("stillStudying DESC, graduationDate DESC")
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "resume")
	private List<Education> educationDetails;

	@OrderBy("stillWorking DESC, startDate DESC")
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "resume")
	private List<Experience> experiences;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "resume")
	private List<LanguageSkill> languageSkills;

	private String profileImage;

	private String githubAccount;

	private String linkedinAccount;

	@Lob
	private String summary;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "resume")
	private List<TechnicalSkill> technicalSkills;
}
