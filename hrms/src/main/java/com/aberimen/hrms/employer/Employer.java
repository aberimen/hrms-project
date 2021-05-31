package com.aberimen.hrms.employer;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotEmpty;

import com.aberimen.hrms.jobposting.JobPosting;
import com.aberimen.hrms.user.User;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@Entity
@PrimaryKeyJoinColumn(name = "user_id",referencedColumnName = "id")
public class Employer extends User{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	@Column(nullable = false)
	private String company;
	
	@NotEmpty
	@Column(nullable = false)
	private String webSite;
	
	@NotEmpty
	@Column(nullable = false)
	private String phoneNumber;
	
	@Column(nullable = false)
	private boolean verified; //by system admin
	
	@OneToMany(mappedBy = "employer",cascade = CascadeType.REMOVE)
	private List<JobPosting> jobPostings;
	

}
