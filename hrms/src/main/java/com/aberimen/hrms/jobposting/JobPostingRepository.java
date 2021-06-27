package com.aberimen.hrms.jobposting;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface JobPostingRepository extends JpaRepository<JobPosting, Long>, JpaSpecificationExecutor<JobPosting>{
	
	Page<JobPosting> findByEmployerIdAndActive(long employerId,boolean active, Pageable pageable); // işveren(firma)'e ait tüm aktif iş ilanları
}
