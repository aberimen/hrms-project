package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.candidate.dto.CandidateDTO;
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
		List<CandidateDTO> candidates = candidateService.getCandidates()
		.stream()
		.map( c -> new CandidateDTO(c)) // map Candidates to CandidateDTOs
		.collect(Collectors.toList());
		
		return candidates;
	}

	@PostMapping("/candidates")
	public void register(@Valid @RequestBody Candidate candidate) {
		candidateService.save(candidate);
	}

	@PostMapping("/candidates/{candidateId}/createresume")
	public GenericResponse createResume(@RequestBody Resume resume, long candidateId) {
		 candidateService.saveResume(resume,candidateId);
		 return new GenericResponse("CV oluşturuldu.");
	}
	
	@GetMapping("/candidates/favorite-jobs/{candidateId}")
	public List<Map<String, Long>> getFavoriteJobs(@PathVariable long candidateId ){
		return candidateService.getFavoriteJobs(candidateId)
		.stream()
		.map(job -> Map.of("jobId", job.getId()))
		.collect(Collectors.toList());
	}
	
	@PostMapping("/candidates/favorite-jobs/{candidateId}/{jobId}")
	public Map<String,Long> addJobToFavoriteJobs(@PathVariable long candidateId,@PathVariable long jobId) {
		long favoritedJobID = candidateService.saveFavoriteJob(candidateId,jobId);
		return Map.of("jobId", favoritedJobID);
	}
	
	@DeleteMapping("/candidates/favorite-jobs/{candidateId}/{jobId}")
	public Map<String,Long> ddeleteJobToFavoriteJobs(@PathVariable long candidateId,@PathVariable long jobId) {
		long favoritedJobID = candidateService.saveFavoriteJob(candidateId,jobId);
		return Map.of("jobId", favoritedJobID);
	}
	
	

}
