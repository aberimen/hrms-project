package com.aberimen.hrms.employer;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.employer.dto.EmployerDTO;
import com.aberimen.hrms.employer.dto.EmployerRegisterDTO;

@RestController
@RequestMapping("/api/1.0")
public class EmployerController {
	
	@Autowired
	EmployerService employerService;
	
	@PostMapping("/employers")
	public ResponseEntity<?> register(@Valid @RequestBody EmployerRegisterDTO registerDTO) {
		return employerService.saveEmployer(registerDTO);
	}
	
	@GetMapping("/employers")
	public List<EmployerDTO> getAllEmployers(){
		
		return employerService.getEmployers()
				.stream()
				.map(EmployerDTO::new)
				.collect(Collectors.toList());
	}
	
	
	
	
}
