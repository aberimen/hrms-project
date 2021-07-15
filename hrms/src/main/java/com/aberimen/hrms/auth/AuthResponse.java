package com.aberimen.hrms.auth;

import com.aberimen.hrms.user.dto.UserDTO;

import lombok.Data;

@Data
public class AuthResponse {
	
	private String token;
	
	private UserDTO user;

}
