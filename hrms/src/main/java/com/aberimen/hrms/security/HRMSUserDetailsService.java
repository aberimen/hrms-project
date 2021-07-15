package com.aberimen.hrms.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.user.User;
import com.aberimen.hrms.user.UserService;

@Service
public class HRMSUserDetailsService implements UserDetailsService{

	@Autowired
	private UserService userService;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User userInDB = userService.findByUsername(username);
		if(userInDB == null) {
			throw new UsernameNotFoundException("User not found");
		}
		return new HRMSUserDetails(userInDB);
	}

}
