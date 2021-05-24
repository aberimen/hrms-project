package com.aberimen.hrms.jobposition;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.utils.GenericResponse;

import lombok.AllArgsConstructor;


@RestController
@RequestMapping("/api/1.0/")
@AllArgsConstructor
public class JobPositionController {

	private JobPositionService jobPositionService;
	
	@PostMapping("/positions")
	public ResponseEntity<GenericResponse> createPosition(@Valid @RequestBody JobPosition jobPosition) {
		return jobPositionService.save(jobPosition);
	}
	
	@GetMapping("/positions")
	public List<JobPosition> getAllPositions() {
		
		return jobPositionService.getAll();
	}
}
