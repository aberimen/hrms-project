package com.aberimen.hrms.user.dto;

import com.aberimen.hrms.user.Role;
import com.aberimen.hrms.user.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	
	private long id;
	
	private String email;

	private boolean enabled;
	
	private Role role;
	
	public UserDTO(User user) { // User to UserDTO
		setId(user.getId());
		setEmail(user.getEmail());
		setRole(user.getRole());
		setEnabled(user.isEmailVerified());
	}

}
