package com.aberimen.hrms.candidate;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.aberimen.hrms.user.UserBaseRepository;

@Repository
public interface CandidateRepository extends UserBaseRepository<Candidate>{
	
	Optional<Candidate> findByNationalId(String nationalID);
	

}
