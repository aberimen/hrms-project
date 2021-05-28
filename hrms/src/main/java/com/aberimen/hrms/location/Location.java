package com.aberimen.hrms.location;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Location {
	
	@Id
	private int id;
	
	private String city;
	
	

}
