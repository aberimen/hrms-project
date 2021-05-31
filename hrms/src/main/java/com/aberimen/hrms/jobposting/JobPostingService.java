package com.aberimen.hrms.jobposting;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.jobposting.dto.JobPostingResponseDTO;
import com.aberimen.hrms.utils.GenericResponse;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class JobPostingService {
	
	private JobPostingRepository jobPostingRepository;

	
	
	public GenericResponse createJobPosting(JobPosting jobPosting) {
		jobPostingRepository.save(jobPosting);
		
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


}
