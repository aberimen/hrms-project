package com.aberimen.hrms.jobposition;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobPositionRepository extends JpaRepository<JobPosition, Integer>{

	Optional<JobPosition> findByPositionNameIgnoreCase(String positionName);

}
