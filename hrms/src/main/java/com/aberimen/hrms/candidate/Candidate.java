package com.aberimen.hrms.candidate;

import java.time.LocalDate;

import javax.persistence.CascadeType;
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
public class Candidate{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private String lastName;

	@Column(nullable = false)
	private LocalDate dateOfBirth;
	
	@Column(length = 11, unique = true, nullable = false)
	private String nationalId;
	
	@OneToOne(optional = false,cascade = CascadeType.ALL)
	private User user;
	

}
