package com.aberimen.hrms.employer;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.aberimen.hrms.jobposting.JobPosting;
import com.aberimen.hrms.user.User;

import lombok.Data;

@Data
@Entity
public class Employer{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(nullable = false)
	private String company;
	
	@Column(nullable = false)
	private String webSite;
	
	@Column(nullable = false)
	private String phoneNumber;
	
	@OneToOne(optional = false,cascade = CascadeType.ALL)
	private User user;
	
	@Column(nullable = false)
	private boolean verified; //by system admin
	
	@OneToMany(mappedBy = "employer",cascade = CascadeType.REMOVE)
	private List<JobPosting> jobPostings;
	

}
