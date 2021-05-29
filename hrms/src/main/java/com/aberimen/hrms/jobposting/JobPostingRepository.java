package com.aberimen.hrms.jobposting;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobPostingRepository extends JpaRepository<JobPosting, Long>{
	List<JobPosting> findByEmployerId(long employerId);
}
