package com.aberimen.hrms.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAuthorizationService {
	
	@Autowired
	UserRepository userRepository;
	
	public boolean canUpdate(long principalId,long userId) {
		if(principalId != userId) {
			return false;
		}
		
		Optional<User> optionalUser = userRepository.findById(userId);
		if(!optionalUser.isPresent()) {
			return false;
		}
		
		return true;	
	}

}
