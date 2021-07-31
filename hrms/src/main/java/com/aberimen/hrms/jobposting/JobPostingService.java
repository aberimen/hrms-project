package com.aberimen.hrms.jobposting;

import java.time.LocalDateTime;
import java.util.Optional;

import javax.persistence.criteria.Join;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.common.location.Location;
import com.aberimen.hrms.error.GenericNotFoundException;
import com.aberimen.hrms.jobposition.JobPosition;
import com.aberimen.hrms.jobposting.dto.JobPostingResponseDTO;
import com.aberimen.hrms.utils.GenericResponse;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class JobPostingService {

	private JobPostingRepository jobPostingRepository;

	public GenericResponse createJobPosting(JobPosting jobPosting) {
		jobPosting.setCreatedAt(LocalDateTime.now());
		jobPosting.setActive(true);
		jobPostingRepository.save(jobPosting);

		return new GenericResponse("İş ilanı eklendi.");
	}

	public Page<JobPosting> getActiveJobPostings(Boolean isRemote, Integer min, Integer max,
			EmploymentType employmentType, String location, String positionName, Pageable pageable) {

		Specification<JobPosting> specs = Specification
				.where(isActive(true))
				.and(isRemote(isRemote))
				.and(minSalaryGreaterThan(min))
				.and(minSalaryLessThan(max))
				.and(isEmployementTypeEqual(employmentType))
				.and(isPositionNameLike(positionName))
				.and(isLocationEqual(location));

		return jobPostingRepository.findAll(specs, pageable);
	}

	public Page<JobPostingResponseDTO> getJobPostingsOfEmployer(long employerId, Pageable pageable) {

		return jobPostingRepository.findByEmployerIdAndActive(employerId, true, pageable)
				.map(JobPostingResponseDTO::new);
	}

	public GenericResponse changePositionStatus(long id) {
		JobPosting inDB = jobPostingRepository.findById(id).get();
		inDB.setActive(!inDB.isActive());
		jobPostingRepository.save(inDB);

		return new GenericResponse("İş ilanı durumu değiştirildi.");
	}
	
	public JobPosting findById(long jobId) {
		 Optional<JobPosting> jobOptional = jobPostingRepository.findById(jobId);

			if (!jobOptional.isPresent()) {
				throw new GenericNotFoundException("İş ilanı bulunamadı");
			}

			return jobOptional.get();
	}


	public Specification<JobPosting> isActive(Boolean isActive) {
		return (root, query, criteriaBuilder) -> {
			return isActive == null ? null : criteriaBuilder.equal(root.get("active"), isActive);
		};
	}

	public Specification<JobPosting> isRemote(Boolean isRemote) {
		return (root, query, criteriaBuilder) -> {
			return isRemote == null ? null : criteriaBuilder.equal(root.get("workRemotely"), isRemote);
		};
	}

	public Specification<JobPosting> minSalaryGreaterThan(Integer min) {
		return (root, query, criteriaBuilder) -> {
			return min == null ? null : criteriaBuilder.greaterThan(root.get("minSalary"), min);
		};
	}

	public Specification<JobPosting> minSalaryLessThan(Integer max) {
		return (root, query, criteriaBuilder) -> {
			return max == null ? null : criteriaBuilder.lessThan(root.get("minSalary"), max);
		};
	}

	public Specification<JobPosting> isEmployementTypeEqual(EmploymentType value) {
		return (root, query, criteriaBuilder) -> {
			return value == null ? null : criteriaBuilder.equal(root.get("employmentType"), value);
		};
	}

	public Specification<JobPosting> isPositionNameLike(String positionName) {
		return (root, query, cb) -> {
			if (positionName == null || positionName.isEmpty())
				return null;
			Join<JobPosting, JobPosition> join = root.join("jobPosition");
			return cb.like(cb.upper(join.get("positionName")), "%" + positionName.toUpperCase() + "%");
		};
	}

	public Specification<JobPosting> isLocationEqual(String city) {
		return (root, query, cb) -> {
			if (city == null || city.isEmpty())
				return null;
			Join<JobPosting, Location> join = root.join("location");
			return cb.equal(join.get("city"), city);
		};
	}

	
}
