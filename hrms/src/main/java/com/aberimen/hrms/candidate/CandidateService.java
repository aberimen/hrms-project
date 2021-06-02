package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.aberimen.hrms.resume.Resume;

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

	public Candidate saveResume(Resume resume, long candidateId) {
		Optional<Candidate> candidateOptional = candidateRepository.findById(candidateId);
		
		System.out.println(candidateOptional.get().getEmail());
		if(candidateOptional.isPresent()) {
		   Candidate candidate = candidateOptional.get();
		   candidate.setResume(resume);
		   
		   return candidateRepository.save(candidate);
		}
		
		return null;
	}

}
