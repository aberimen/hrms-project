package com.aberimen.hrms.candidate;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.aberimen.hrms.resume.Resume;
import com.aberimen.hrms.user.User;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NonNull;

@Data
@EqualsAndHashCode(callSuper = false)
@Entity
@PrimaryKeyJoinColumn(name = "user_id",referencedColumnName = "id")
public class Candidate extends User{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	
	@NotEmpty
	@Column(nullable = false)
	private String name;
	
	@NotEmpty
	@Column(nullable = false)
	private String lastName;

	@NotNull
	@Column(nullable = false)
	private LocalDate dateOfBirth;
	
	@NotEmpty
	@Column(length = 11, unique = true, nullable = false)
	private String nationalId;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Resume resume;
	

}
