package com.aberimen.hrms.utils.validation;

import java.util.Optional;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.aberimen.hrms.user.User;
import com.aberimen.hrms.user.UserRepository;
import com.aberimen.hrms.user.dto.UpdatedUserDTO;

public class UniqueUpdatedEmailValidator implements ConstraintValidator<UniqueEmail, UpdatedUserDTO> {

	@Autowired
	UserRepository userRepository;

	@Override
	public boolean isValid(UpdatedUserDTO updatedUser, ConstraintValidatorContext context) {
		Optional<User> userOptional = userRepository.findByEmail(updatedUser.getEmail());

		if (!userOptional.isPresent()) {
			return true;
		}

		User user = userOptional.get();

		// is current user?
		if (updatedUser.getId() != null && user.getId() == updatedUser.getId()) {
			return true;
		}

		return false;
	}

}
