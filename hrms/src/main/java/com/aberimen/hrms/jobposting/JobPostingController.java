package com.aberimen.hrms.jobposting;


import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.jobposting.dto.JobPostingResponseDTO;
import com.aberimen.hrms.utils.GenericResponse;

@RestController
@RequestMapping("/api/1.0")
public class JobPostingController {
	
	private JobPostingService jobPostingService;
	
	public JobPostingController(JobPostingService jobPostingService) {
		super();
		this.jobPostingService = jobPostingService;
	}
	
	@PostMapping("/job-postings")
	public GenericResponse createJobPosting(@Valid @RequestBody JobPosting jobPosting) {
		return jobPostingService.createJobPosting(jobPosting);
	}
	
	@GetMapping("/job-postings")
	public Page<JobPostingResponseDTO> getJobPostings(Pageable page){
		
		return jobPostingService.getActiveJobPostings(page).map(JobPostingResponseDTO::new);
	}
	
	@PostMapping("/job-postings/status/{id}")
	public GenericResponse changeStatus(@PathVariable long id) {
		
		return jobPostingService.changePositionStatus(id);
	}

}
