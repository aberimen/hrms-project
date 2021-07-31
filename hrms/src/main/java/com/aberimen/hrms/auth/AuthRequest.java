package com.aberimen.hrms.auth;

import lombok.Data;

@Data
public class AuthRequest {
	
	private String email;
	
	private String password;

}
