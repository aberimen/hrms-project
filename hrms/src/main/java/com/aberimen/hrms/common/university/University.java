package com.aberimen.hrms.common.university;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class University {

	@Id
	@GeneratedValue
	private int id;
	
	private String name;
}
