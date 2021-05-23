package com.aberimen.hrms.jobposition;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class JobPositionService {

	private JobPositionRepository jobPositionRepository;

	public List<JobPosition> getAll() {

		return jobPositionRepository.findAll();
	}
	
	
}
