package com.aberimen.hrms.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.user.dto.UserDTO;

@RestController
@RequestMapping("/api/1.0/auth")
public class AuthController {

	@Autowired
	AuthService authService;

	@PostMapping("/login")
	public UserDTO login(@RequestBody AuthRequest request) {
		
		return authService.authenticateUser(request);
	}
}
