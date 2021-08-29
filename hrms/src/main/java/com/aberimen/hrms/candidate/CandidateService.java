package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.candidate.dto.CandidateRegisterRequest;
import com.aberimen.hrms.candidate.dto.UpdatedCandidate;
import com.aberimen.hrms.error.BadRequestException;
import com.aberimen.hrms.error.GenericNotFoundException;
import com.aberimen.hrms.jobposting.JobPosting;
import com.aberimen.hrms.jobposting.JobPostingService;
import com.aberimen.hrms.resume.Resume;
import com.aberimen.hrms.user.Role;
import com.aberimen.hrms.utils.Mapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CandidateService {

	private CandidateRepository candidateRepository;
	private JobPostingService jobPostingService;
	private PasswordEncoder passwordEncoder; // SecurityConfig sınıfında BCrypt için bean tanımlamıştık

	public void save(CandidateRegisterRequest candidateReq) {
		Candidate candidate = Mapper.getInstance().map(candidateReq, Candidate.class);

		Resume emptyResume = new Resume();
		candidate.setEmailVerified(false); // email doğrulaması ile hesabını açtırması gerek
		candidate.setRole(Role.CANDIDATE);
		candidate.setResume(emptyResume);
		candidate.setPassword(passwordEncoder.encode(candidate.getPassword()));

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

	public Candidate updateCandidate(long id, UpdatedCandidate updatedCandidate) {
		Candidate candidateInDB = getCandidateById(id);
		candidateInDB.setEmail(updatedCandidate.getEmail());
		candidateInDB.setName(updatedCandidate.getName());
		candidateInDB.setLastName(updatedCandidate.getLastName());

		return candidateRepository.save(candidateInDB);
	}

	public void applyJob(long candidateId, long jobId) {
		Candidate candidate = getCandidateById(candidateId);
		JobPosting job = jobPostingService.findById(jobId);
		if (!candidate.getAppliedJobs().contains(job)) {
			candidate.getAppliedJobs().add(job);
			candidateRepository.save(candidate);
		} else {
			throw new BadRequestException("already applied");
		}

	}

	public List<JobPosting> getAppliedJobs(long candidateId) {
		Candidate candidate = getCandidateById(candidateId);
		return candidate.getAppliedJobs();
	}

}
