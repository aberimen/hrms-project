package com.aberimen.hrms.auth;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.candidate.Candidate;
import com.aberimen.hrms.candidate.dto.CandidateDTO;
import com.aberimen.hrms.employer.Employer;
import com.aberimen.hrms.employer.dto.EmployerDTO;
import com.aberimen.hrms.error.UnauthorizedException;
import com.aberimen.hrms.user.Role;
import com.aberimen.hrms.user.User;
import com.aberimen.hrms.user.UserRepository;
import com.aberimen.hrms.user.dto.UserDTO;

@Service
public class AuthService {

	@Autowired
	private UserRepository userRepository;

	public UserDTO authenticateUser(AuthRequest authRequest) { // demo
		Optional<User> userOptional = userRepository.findByEmail(authRequest.getEmail());

		if (!userOptional.isPresent()) {
			throw new UnauthorizedException("Unauthorized.");
		}

		User user = userOptional.get();

		if (user.getRole().equals(Role.EMPLOYER)) {
			return new EmployerDTO((Employer) user);
		} else if (user.getRole().equals(Role.CANDIDATE)) {
			return new CandidateDTO((Candidate) user);
		}

		return null;

	}

}
