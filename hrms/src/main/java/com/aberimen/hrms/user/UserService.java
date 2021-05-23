package com.aberimen.hrms.user;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	
	public void save(User user) {
		
		userRepository.save(user);
	}


	public User getUserByEmail(String email) {
		Optional<User> inDB = userRepository.findByEmail(email);
		
		if(inDB.isPresent()) {
			return inDB.get();
		}
		return null;
	}
	
	
	

}
