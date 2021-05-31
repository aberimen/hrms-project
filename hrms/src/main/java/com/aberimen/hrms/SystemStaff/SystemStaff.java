package com.aberimen.hrms.systemstaff;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.aberimen.hrms.user.User;

import lombok.Data;

@Entity
@Data
public class SystemStaff extends User{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	

}
