package com.aberimen.hrms.jobposition;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;


@RestController
@RequestMapping("/api/1.0/")
@AllArgsConstructor
public class JobPositionController {

	private JobPositionService jobPositionService;
	
	@GetMapping("/positions")
	public List<JobPosition> getAllPositions() {
		
		return jobPositionService.getAll();
	}
}
