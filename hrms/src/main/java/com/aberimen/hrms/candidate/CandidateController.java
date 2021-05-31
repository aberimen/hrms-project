package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.candidate.dto.CandidateDTO;

@RestController
@RequestMapping("/api/1.0/")
public class CandidateController {
	
	CandidateService candidateService;

	
	public CandidateController(CandidateService candidateService) {
		super();
		this.candidateService = candidateService;
	
	}
	
	@GetMapping("/candidates")
	public ResponseEntity<List<CandidateDTO>> getAll() {
		
		List<CandidateDTO> candidates = candidateService.getCandidates()
		.stream()
		.map( c -> new CandidateDTO(c)) // map Candidates to CandidateDTOs
		.collect(Collectors.toList());
		
		return ResponseEntity.ok(candidates);
	}

	@PostMapping("/candidates")
	public void register(@Valid @RequestBody Candidate candidate) {
		
		candidateService.save(candidate);
	}

	
	

}
