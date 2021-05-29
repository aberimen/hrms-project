package com.aberimen.hrms.employer;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.employer.dto.EmployerRegisterDTO;
import com.aberimen.hrms.user.User;
import com.aberimen.hrms.utils.GenericResponse;

@Service
public class EmployerService {

	private EmployerRepository employerRepository;

	public EmployerService(EmployerRepository employerRepository) {
		super();
		this.employerRepository = employerRepository;
	}
	
	public ResponseEntity<?> saveEmployer(EmployerRegisterDTO registerDTO) {
		String emailDomain = registerDTO.getEmail().split("@")[1];
		String host = registerDTO.getWebSite()
	            .replaceAll("http://|https://|www.|ws://|wss://","")
	            .replaceAll("/.*","");
	            
		if(!emailDomain.equalsIgnoreCase(host)) {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new GenericResponse("Geçersiz şirket maili"));
		}else {
			Employer employer = mapEmployerRegisterDTOtoEmployer(registerDTO);
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
	
	public Employer mapEmployerRegisterDTOtoEmployer(EmployerRegisterDTO registerDTO) {
		User user = new User();
		
		user.setEmail(registerDTO.getEmail());
		user.setEnabled(false);
		user.setPassword(registerDTO.getPassword());
		
		Employer employer = new Employer();

		employer.setUser(user);
		employer.setCompany(registerDTO.getCompany());
		employer.setPhoneNumber(registerDTO.getPhoneNumber());
		employer.setVerified(false);
		employer.setWebSite(registerDTO.getWebSite());
		
		
		return employer;
	}
	
	
	
}
