package com.aberimen.hrms.candidate;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.candidate.dto.CandidateRegisterDTO;
import com.aberimen.hrms.user.User;
import com.aberimen.hrms.utils.GenericResponse;

@RestController
@RequestMapping("/api/1.0/")
public class CandidateController {
	
	CandidateService candidateService;

	
	public CandidateController(CandidateService candidateService) {
		super();
		this.candidateService = candidateService;
	
	}
	
	@GetMapping("/candidates")
	public ResponseEntity<List<Candidate>> getAll() {
		
		return ResponseEntity.ok(candidateService.getCandidates());
	}

	@PostMapping("/candidates")
	public void register(@Valid @RequestBody CandidateRegisterDTO registerDTO) {
		
		candidateService.save(mapRegisterDTOtoCandidate(registerDTO));
	}

	@PostMapping("/cadidates/verify")
	public GenericResponse verifyEmail(@RequestBody String email) {
		String message = candidateService.verifyEmail(email);
		
		return new GenericResponse(message);
	}
	
	
	public Candidate mapRegisterDTOtoCandidate(CandidateRegisterDTO request) {
		User user = new User();
	
		user.setEmail(request.getEmail());
		user.setEnabled(false);
		user.setPassword(request.getPassword());
		
		Candidate candidate = new Candidate();

		candidate.setUser(user);
		candidate.setName(request.getName());
		candidate.setLastName(request.getLastName());
		candidate.setNationalId(request.getNationalId());
		candidate.setDateOfBirth(request.getDateOfBirth());
		
		return candidate;
	}

}
