package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.aberimen.hrms.error.GenericNotFoundException;
import com.aberimen.hrms.jobposting.JobPosting;
import com.aberimen.hrms.jobposting.JobPostingService;
import com.aberimen.hrms.resume.Resume;
import com.aberimen.hrms.user.Role;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CandidateService {

	private CandidateRepository candidateRepository;
	private JobPostingService jobPostingService;

	public void save(Candidate candidate) {
		Resume emptyResume = new Resume();
		candidate.setEnabled(false); // email doğrulaması ile hesabını açtırması gerek
		candidate.setRole(Role.CANDIDATE);
		candidate.setResume(emptyResume);
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

	public long saveFavoriteJob(long candidateId, long jobId) {
		Candidate candidate = getCandidateById(candidateId);
		JobPosting job = jobPostingService.findById(jobId);
		candidate.getFavoriteJobs().add(job);
		candidateRepository.save(candidate);
		
		return job.getId();
	}
	
	public long deleteFavoriteJob(long candidateId, long jobId) {
		Candidate candidate = getCandidateById(candidateId);
		JobPosting job = jobPostingService.findById(jobId);
		candidate.getFavoriteJobs().remove(job);
		candidateRepository.save(candidate);
		
		return job.getId();
	}

	public Set<JobPosting> getFavoriteJobs(long candidateId) {
		Candidate candidate = getCandidateById(candidateId);
		return candidate.getFavoriteJobs();
	}

}
