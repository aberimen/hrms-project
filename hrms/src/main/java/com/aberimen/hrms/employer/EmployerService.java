package com.aberimen.hrms.employer;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.utils.GenericResponse;

@Service
public class EmployerService{

	private EmployerRepository employerRepository;

	public EmployerService(EmployerRepository employerRepository) {
		super();
		this.employerRepository = employerRepository;
	}
	
	public ResponseEntity<?> saveEmployer(Employer employer) {
		String emailDomain = employer.getEmail().split("@")[1];
		String host = employer.getWebsite()
	            .replaceAll("http://|https://|www.|ws://|wss://","")
	            .replaceAll("/.*","");
	            
		if(!emailDomain.equalsIgnoreCase(host)) {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new GenericResponse("Geçersiz şirket maili"));
		}else {
			employerRepository.save(employer);
			
			return ResponseEntity.ok(new GenericResponse("Ekleme başarılı"));
		}
		
		
	}
	
	public List<Employer> getEmployers(){
		return employerRepository.findAll();
	}
	
	public Employer getById(long id) {
		return employerRepository.findById(id).get();
	}
	

	
	
	
}
