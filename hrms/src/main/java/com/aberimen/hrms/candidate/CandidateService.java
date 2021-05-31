package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CandidateService {

	private CandidateRepository candidateRepository;

	public void save(Candidate candidate) {

		candidateRepository.save(candidate);
	}

	public List<Candidate> getCandidates() {

		return candidateRepository.findAll();
	}

	public Optional<Candidate> findByNationalId(String nationalID) {

		return candidateRepository.findByNationalId(nationalID);
	}

}
