package com.aberimen.hrms.jobposting;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.employer.Employer;
import com.aberimen.hrms.employer.EmployerService;
import com.aberimen.hrms.jobposition.JobPosition;
import com.aberimen.hrms.jobposition.JobPositionService;
import com.aberimen.hrms.jobposting.dto.JobPostingDTO;
import com.aberimen.hrms.jobposting.dto.JobPostingResponseDTO;
import com.aberimen.hrms.location.Location;
import com.aberimen.hrms.location.LocationService;
import com.aberimen.hrms.utils.GenericResponse;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class JobPostingService {
	
	private JobPostingRepository jobPostingRepository;
	private EmployerService employerService;
	private LocationService locationService;
	private JobPositionService jobPositionService;
	
	public GenericResponse createJobPosting(JobPostingDTO jobPosting) {
		jobPostingRepository.save(mapJobPostingDTOtoJobPosting(jobPosting));
		
		return new GenericResponse("İş ilanı eklendi.");
	}
	
	public Page<JobPosting> getJobPostings(Pageable pageable){
		
		return jobPostingRepository.findAll(pageable);
	}
	
	public List<JobPostingResponseDTO> getJobPostingsOfEmployer(long employerId) {
		return jobPostingRepository.findByEmployerId(employerId)
				.stream()
				.map(JobPostingResponseDTO::new)
				.collect(Collectors.toList());
	}
	
	public GenericResponse changePositionStatus(long id) {
		JobPosting inDB = jobPostingRepository.findById(id).get();
		inDB.setActive(!inDB.isActive());
		
		return new GenericResponse("İş ilanı durumu değiştirildi.");
	}

	
	public JobPosting mapJobPostingDTOtoJobPosting(JobPostingDTO jobPostingDTO) {
		Employer employer = employerService.getById(jobPostingDTO.getEmployerId());
		Location location = locationService.getById(jobPostingDTO.getLocationId());
		JobPosition jobPosition = jobPositionService.getById(jobPostingDTO.getJobPositionId());
		
		return new JobPosting(0, 
				jobPostingDTO.getJobDescription(), 
				jobPostingDTO.getMinSalary(),
				jobPostingDTO.getMaxSalary(),
				jobPostingDTO.getOpenPositions(),
				jobPostingDTO.getDeadline(), 
				location, 
				jobPosition, 
				employer, 
				LocalDate.now(), 
				true);
	}

}
