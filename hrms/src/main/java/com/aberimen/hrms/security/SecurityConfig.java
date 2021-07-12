package com.aberimen.hrms.security;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		
		http.exceptionHandling().authenticationEntryPoint(new AuthEntryPoint()); // custom message for forbidden error
		
		http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/1.0/job-postings").authenticated()
		.and()
		.authorizeRequests().anyRequest().permitAll();
		
	}
	
	

}
