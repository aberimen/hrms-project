package com.aberimen.hrms.common.department;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Department {

	@Id
	private int id;
	
	private String departmentName;
}
