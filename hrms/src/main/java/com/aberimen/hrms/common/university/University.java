package com.aberimen.hrms.common.university;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.aberimen.hrms.common.location.Location;

import lombok.Data;

@Data
@Entity
public class University {

	@Id
	@GeneratedValue
	private int id;

	private String name;
	
	@ManyToOne
	private Location location;

}
