package com.aberimen.hrms.jobposting;

import java.time.LocalDate;

import javax.transaction.Transactional;

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
	
	@Transactional
	public Page<JobPosting> getActiveJobPostings(Pageable pageable){
		
		return jobPostingRepository.findByActive(true,pageable); //aktif iş ilanları
	}
	
	@Transactional //Lob veri içerdiği için
	public Page<JobPostingResponseDTO> getJobPostingsOfEmployer(long employerId, Pageable pageable) {
		
		return jobPostingRepository.findByEmployerIdAndActive(employerId, true, pageable).map(JobPostingResponseDTO::new);
	}
	
	public GenericResponse changePositionStatus(long id) {
		JobPosting inDB = jobPostingRepository.findById(id).get();
		inDB.setActive(!inDB.isActive());
		jobPostingRepository.save(inDB);
		
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
