package com.aberimen.hrms.resume;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResumeRepository extends JpaRepository<Resume, Long>{

}
