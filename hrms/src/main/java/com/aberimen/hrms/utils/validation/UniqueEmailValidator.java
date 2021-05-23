package com.aberimen.hrms.utils.validation;

import java.util.Optional;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.aberimen.hrms.user.User;
import com.aberimen.hrms.user.UserRepository;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public boolean isValid(String email, ConstraintValidatorContext context) {
		Optional<User> inDB = userRepository.findByEmail(email);
		
		if(inDB.isPresent()) { //veritabanında mevcutsa unique değil yani valid değil.
			return false; 
		}
		return true;
	}

}
