package com.aberimen.hrms.jobposting;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/1.0")
public class JobPostingController {
	
	private JobPostingService jobPostingService;
	
	public JobPostingController(JobPostingService jobPostingService) {
		super();
		this.jobPostingService = jobPostingService;
	}

	
	@GetMapping("/job-postings")
	public Page<JobPosting> getJobPostings(@PageableDefault(direction = Direction.DESC) Pageable page){
		
		return jobPostingService.getJobPostings(page);
	}
	

}
