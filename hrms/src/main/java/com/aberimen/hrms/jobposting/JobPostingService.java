package com.aberimen.hrms.jobposting;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class JobPostingService {
	
	private JobPostingRepository jobPostingRepository;

	public JobPostingService(JobPostingRepository jobPostingRepository) {
		super();
		this.jobPostingRepository = jobPostingRepository;
	}
	
	
	public Page<JobPosting> getJobPostings(Pageable pageable){
		
		return jobPostingRepository.findAll(pageable);
	}

}
