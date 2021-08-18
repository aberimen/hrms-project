package com.aberimen.hrms.jobposting;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aberimen.hrms.candidate.Candidate;

@Repository
public interface JobPostingRepository extends JpaRepository<JobPosting, Long>, JpaSpecificationExecutor<JobPosting>{
	
	Page<JobPosting> findByEmployerIdAndActive(long employerId,boolean active, Pageable pageable); // işveren(firma)'e ait tüm aktif iş ilanları
	
	@Query(value =  "Select c from Candidate c inner join c.appliedJobs job where job.id = :jobId")
	List<Candidate> findAppliedCandidates(long jobId);
}
