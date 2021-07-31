package com.aberimen.hrms.auth;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.candidate.CandidateService;
import com.aberimen.hrms.candidate.dto.CandidateRegisterRequest;
import com.aberimen.hrms.utils.GenericResponse;

@RestController
@RequestMapping("/api/1.0/auth")
public class AuthController {

	@Autowired
	AuthService authService;
	
	@Autowired
	CandidateService candidateService;

	@PostMapping("/login")
	public AuthResponse login(@RequestBody AuthRequest request) {
		return authService.authenticateUser(request);
	}

	@PostMapping("/candidate-register")
	public GenericResponse registerCandidate(@Valid @RequestBody CandidateRegisterRequest candidate) {
		candidateService.save(candidate);
		return new GenericResponse("signup success");
	}
}
