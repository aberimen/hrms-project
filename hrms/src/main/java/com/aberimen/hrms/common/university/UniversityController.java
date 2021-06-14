package com.aberimen.hrms.common.university;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/1.0/common")
@RestController
public class UniversityController {

	@Autowired
	private UniversityService universityService;

	@GetMapping("/universities")
	public List<University> getUniversities() {
		return universityService.getUniversities();
	}

}
