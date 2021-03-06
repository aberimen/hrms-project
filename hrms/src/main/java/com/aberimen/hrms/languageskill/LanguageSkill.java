package com.aberimen.hrms.languageskill;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.aberimen.hrms.common.language.Language;
import com.aberimen.hrms.resume.Resume;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
public class LanguageSkill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@OneToOne
	private Language language;

	@Enumerated(EnumType.ORDINAL)
	@Column(columnDefinition = "smallint")
	private LanguageLevel languageLevel;

	@JsonIgnore
	@ManyToOne
	private Resume resume;
}
