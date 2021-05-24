package com.aberimen.hrms.utils.validation;

import java.util.Optional;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.aberimen.hrms.candidate.Candidate;
import com.aberimen.hrms.candidate.CandidateService;

public class NationalIDValidator implements ConstraintValidator<ValidNationalID, String>{
	
	@Autowired
	CandidateService candidateService;

	@Override
	public boolean isValid(String nationalID, ConstraintValidatorContext context) {
		
		Optional<Candidate> inDB = candidateService.findByNationalId(nationalID);
		
		if(true) {
			//TODO mernis doğrulaması
			
			if(inDB.isPresent()) { // tcno zaten kayıtlı ise
				return false;
			}
			
			return true;
		}
		return false;
	}

}
