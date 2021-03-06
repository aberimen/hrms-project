package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotEmpty;

import com.aberimen.hrms.jobposting.JobPosting;
import com.aberimen.hrms.resume.Resume;
import com.aberimen.hrms.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@Entity
@PrimaryKeyJoinColumn(name = "user_id", referencedColumnName = "id")
public class Candidate extends User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotEmpty
	@Column(nullable = false)
	private String name;

	@NotEmpty
	@Column(nullable = false)
	private String lastName;

	@NotEmpty
	@Column(nullable = false)
	private String yearOfBirth;

	@NotEmpty
	@Column(length = 11, unique = true, nullable = false)
	private String nationalId;

	@ManyToMany
	private Set<JobPosting> favoriteJobs;

	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	private Resume resume;

	@ManyToMany
	private List<JobPosting> appliedJobs;

}
