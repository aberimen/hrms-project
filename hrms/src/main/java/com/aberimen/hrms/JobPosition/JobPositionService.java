package com.aberimen.hrms.jobposition;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.utils.GenericResponse;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class JobPositionService {

	private JobPositionRepository jobPositionRepository;

	public List<JobPosition> getAll() {

		return jobPositionRepository.findAll();
	}

	public ResponseEntity<GenericResponse> save(JobPosition jobPosition) {
		String positionName = jobPosition.getPositionName();
		
		Optional<JobPosition> inDB = jobPositionRepository.findByPositionNameIgnoreCase(positionName.strip());
		
		if(!inDB.isPresent()) {
			jobPosition.setPositionName(jobPosition.getPositionName().strip()); // removing whitespace
			jobPositionRepository.save(jobPosition);
			return ResponseEntity.ok(new GenericResponse("pozisyon başarıyla eklendi."));
		}
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new GenericResponse("Bu pozisyon daha önce eklenmiş."));

	}

	public JobPosition getById(int jobPositionId) {
		return jobPositionRepository.findById(jobPositionId).get();
	}

}
