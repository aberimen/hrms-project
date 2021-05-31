package com.aberimen.hrms.user;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.utils.GenericResponse;

@RestController
@RequestMapping("/api/1.0/")
public class UserController {

	private final UserService userService;
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

	@PutMapping("/users/email-verification")
	public GenericResponse verifyEmail(@RequestBody String email) {
		String message = userService.verifyEmail(email);
		
		return new GenericResponse(message);
	}
	
}
