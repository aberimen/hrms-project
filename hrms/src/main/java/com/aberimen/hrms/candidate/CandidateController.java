package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;
import javax.websocket.server.PathParam;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.candidate.dto.CandidateDTO;
import com.aberimen.hrms.candidate.dto.UpdatedCandidate;
import com.aberimen.hrms.jobposting.dto.JobPostingResponseDTO;
import com.aberimen.hrms.resume.Resume;
import com.aberimen.hrms.utils.GenericResponse;

@RestController
@RequestMapping("/api/1.0/")
public class CandidateController {

	CandidateService candidateService;

	public CandidateController(CandidateService candidateService) {
		super();
		this.candidateService = candidateService;
	}

	@GetMapping("/candidates")
	public List<CandidateDTO> getAll() {
		// map Candidates to CandidateDTOs
		List<CandidateDTO> candidates = candidateService.getCandidates().stream().map(c -> new CandidateDTO(c))
				.collect(Collectors.toList());

		return candidates;
	}

	@PostMapping("/candidates/{candidateId}/createresume")
	public GenericResponse createResume(@RequestBody Resume resume, long candidateId) {
		candidateService.saveResume(resume, candidateId);
		return new GenericResponse("CV oluşturuldu.");
	}

	@GetMapping("/candidates/favorite-jobs/{candidateId}")
	public List<Map<String, Long>> getFavoriteJobs(@PathVariable long candidateId) {
		return candidateService.getFavoriteJobs(candidateId).stream().map(job -> Map.of("jobId", job.getId()))
				.collect(Collectors.toList());
	}

	@PostMapping("/candidates/favorite-jobs/{candidateId}/{jobId}")
	public Map<String, Long> addJobToFavoriteJobs(@PathVariable long candidateId, @PathVariable long jobId) {
		long favoritedJobID = candidateService.saveFavoriteJob(candidateId, jobId);
		return Map.of("jobId", favoritedJobID);
	}

	@DeleteMapping("/candidates/favorite-jobs/{candidateId}/{jobId}")
	public Map<String, Long> deleteCandidateFavoriteJob(@PathVariable long candidateId, @PathVariable long jobId) {
		long favoritedJobID = candidateService.saveFavoriteJob(candidateId, jobId);
		return Map.of("jobId", favoritedJobID);
	}

	@PutMapping("/candidates/{candidateId}")
	@PreAuthorize("@userAuthorizationService.canUpdate(principal.user.id , #candidateId)")
	public CandidateDTO updateCandidate(@PathVariable long candidateId,
			@Valid @RequestBody UpdatedCandidate updatedCandidate) {
		Candidate candidate = candidateService.updateCandidate(candidateId, updatedCandidate);
		return new CandidateDTO(candidate);
	}
	
	@PostMapping("/candidates/{candidateId}/applied-jobs")
	public GenericResponse applyJob(@PathVariable long candidateId, @PathParam(value = "jobId") long jobId) {
		candidateService.applyJob(candidateId, jobId);
		return new GenericResponse("applied success");
	}
	
	@GetMapping("/candidates/{candidateId}/applied-jobs")
	public List<JobPostingResponseDTO> getAppliedJobs(@PathVariable long candidateId) {
		return candidateService.getAppliedJobs(candidateId)
				.stream()
				.map(JobPostingResponseDTO::new).collect(Collectors.toList());
	}

}
