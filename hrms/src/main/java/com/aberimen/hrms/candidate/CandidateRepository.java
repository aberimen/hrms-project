package com.aberimen.hrms.candidate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aberimen.hrms.user.User;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long>{
	
	Candidate findByUserEmail(User user);
	

}
