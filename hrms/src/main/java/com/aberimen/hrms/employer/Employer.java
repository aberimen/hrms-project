package com.aberimen.hrms.employer;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

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
	private String telNo;
	
	@OneToOne(optional = false)
	private User user;
	
	@Column(nullable = false)
	private boolean verified;
	

}
