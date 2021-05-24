package com.aberimen.hrms.candidate;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.aberimen.hrms.user.User;
import com.aberimen.hrms.user.UserService;


@Service
public class CandidateService {
	
	private CandidateRepository candidateRepository;
	private UserService userService;

	
	public CandidateService(CandidateRepository candidateRepository, UserService userService) {
		super();
		this.candidateRepository = candidateRepository;
		this.userService = userService;
	}


	public void save(Candidate candidate) {
		
		candidateRepository.save(candidate);
	}


	public List<Candidate> getCandidates() {
		
		return candidateRepository.findAll();
	}
	
	public String verifyEmail(String email) {
		// email doğrulama işlemleri
		User inDB = userService.getUserByEmail(email);
		
		if(inDB != null) {
			inDB.setEnabled(true);
			userService.save(inDB);
			
			return "email doğrulandı";
		}
		
		return "email doğrulanamadı";
	}


	public Optional<Candidate> findByNationalId(String nationalID) {
		
		return candidateRepository.findByNationalId(nationalID);
	}
	
	
	

}
