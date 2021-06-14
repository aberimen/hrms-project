package com.aberimen.hrms.common.university;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UniversityService {

	private UniversityRepository universityRepository;

	public UniversityService(UniversityRepository universityRepository) {
		super();
		this.universityRepository = universityRepository;
	}


	public List<University> getUniversities() {
		return universityRepository.findAll();
	}
}
