package com.aberimen.hrms.SystemStaff;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.aberimen.hrms.user.User;

import lombok.Data;

@Entity
@Data
public class SystemStaff {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@OneToOne(optional = false)
	User user;

}
