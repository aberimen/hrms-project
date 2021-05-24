package com.aberimen.hrms.jobposition;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobPositionRepository extends JpaRepository<JobPosition, Long>{

	Optional<JobPosition> findByPositionNameIgnoreCase(String positionName);

}
