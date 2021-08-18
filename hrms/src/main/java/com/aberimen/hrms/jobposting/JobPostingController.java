package com.aberimen.hrms.jobposting;

import java.util.stream.Stream;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.candidate.dto.CandidateDTO;
import com.aberimen.hrms.jobposting.dto.JobPostingDTO;
import com.aberimen.hrms.jobposting.dto.JobPostingResponseDTO;
import com.aberimen.hrms.utils.GenericResponse;

@RestController
@RequestMapping("/api/1.0")
public class JobPostingController {

	private JobPostingService jobPostingService;
	private ModelMapper modelMapper;

	public JobPostingController(JobPostingService jobPostingService, ModelMapper modelMapper) {
		super();
		this.jobPostingService = jobPostingService;
		this.modelMapper = modelMapper;
	}

	@PostMapping("/job-postings")
	@PreAuthorize("hasRole('EMPLOYER')")
	public GenericResponse createJobPosting(@Valid @RequestBody JobPostingDTO jobPostingDto) {
		JobPosting jobPosting = modelMapper.map(jobPostingDto, JobPosting.class);
		return jobPostingService.createJobPosting(jobPosting);
	}

	@GetMapping("/job-postings")
	public Page<JobPostingResponseDTO> getJobPostings(Boolean isRemote, Integer min, Integer max,
			EmploymentType employmentType, String location, String positionName, Pageable pageable) {

		return jobPostingService
				.getActiveJobPostings(isRemote, min, max, employmentType, location, positionName, pageable)
				.map(JobPostingResponseDTO::new);
	}
	
	@GetMapping("/applied-candidates/{jobId}")
	public Stream<CandidateDTO> getAppliedCandidates(@PathVariable long jobId) {
		return jobPostingService.getAppliedCandidates(jobId).stream().map(CandidateDTO::new);
	}
	

	@PostMapping("/job-postings/status/{id}")
	public GenericResponse changeStatus(@PathVariable long id) {

		return jobPostingService.changePositionStatus(id);
	}

}
