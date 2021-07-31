package com.aberimen.hrms.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.candidate.Candidate;
import com.aberimen.hrms.candidate.dto.CandidateDTO;
import com.aberimen.hrms.employer.Employer;
import com.aberimen.hrms.employer.dto.EmployerDTO;
import com.aberimen.hrms.error.UnauthorizedException;
import com.aberimen.hrms.security.HRMSUserDetails;
import com.aberimen.hrms.user.Role;
import com.aberimen.hrms.user.User;
import com.aberimen.hrms.user.dto.UserDTO;
import com.aberimen.hrms.utils.JwtUtil;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthService {

	private JwtUtil jwtUtil;
	private AuthenticationManager authenticationManager;

	public AuthResponse authenticateUser(AuthRequest authRequest) {
		User user = null;

		try {
			Authentication authenticate = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
			HRMSUserDetails userDetails = (HRMSUserDetails) authenticate.getPrincipal();
			user = userDetails.getUser();

		} catch (Exception e) {
			throw new UnauthorizedException("Kullanıcı adı veya şifre yanlış " + e);
		}

		String token = jwtUtil.generateToken(user.getEmail());
		Role userRole = user.getRole();

		switch (userRole) {
			case EMPLOYER:
				return createAuthResponse(token, new EmployerDTO((Employer) user));

			case CANDIDATE:
				return createAuthResponse(token, new CandidateDTO((Candidate) user));
			default:
				return null;
		}
	}

	public AuthResponse createAuthResponse(String token, UserDTO user) {
		AuthResponse response = new AuthResponse();
		response.setToken(token);
		response.setUser(user);
		return response;
	}

}
