package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.aberimen.hrms.error.GenericNotFoundException;
import com.aberimen.hrms.resume.Resume;
import com.aberimen.hrms.user.Role;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CandidateService {

	private CandidateRepository candidateRepository;

	public void save(Candidate candidate) {
		candidate.setEnabled(false); // email doğrulaması ile hesabını açtırması gerek
		candidate.setRole(Role.CANDIDATE);
		candidateRepository.save(candidate);
	}

	public List<Candidate> getCandidates() {
		return candidateRepository.findAll();
	}

	public Optional<Candidate> findByNationalId(String nationalID) {
		return candidateRepository.findByNationalId(nationalID);
	}

	public Candidate getCandidateById(long candidateId) {
		Optional<Candidate> optionalInDB = candidateRepository.findById(candidateId);

		if (!optionalInDB.isPresent()) {
			throw new GenericNotFoundException("Aday bulunamadı");
		}

		return optionalInDB.get();
	}

	public void saveResume(Resume resume, long candidateId) {
		Candidate candidate = getCandidateById(candidateId);
		candidate.setResume(resume);
		candidateRepository.save(candidate);
	}

}
