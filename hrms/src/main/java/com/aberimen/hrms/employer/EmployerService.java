package com.aberimen.hrms.employer;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.aberimen.hrms.employer.dto.AccountDetailsUpdatedDTO;
import com.aberimen.hrms.error.BadRequestException;
import com.aberimen.hrms.error.NotFoundException;
import com.aberimen.hrms.user.Role;

@Service
public class EmployerService {

	private EmployerRepository employerRepository;
	private PasswordEncoder passwordEncoder;

	public EmployerService(EmployerRepository employerRepository, PasswordEncoder passwordEncoder) {
		super();
		this.employerRepository = employerRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public Employer saveEmployer(Employer employer) {
		String emailDomain = employer.getEmail().split("@")[1];
		String host = employer.getWebsite().replaceAll("http://|https://|www.|ws://|wss://", "").replaceAll("/.*", "");

		if (!emailDomain.equalsIgnoreCase(host)) {

			throw new BadRequestException("Geçersiz şirket maili");
		} else {
			employer.setPassword(passwordEncoder.encode(employer.getPassword()));
			employer.setRole(Role.EMPLOYER);
			return employerRepository.save(employer);
		}

	}

	public List<Employer> getEmployers() {
		return employerRepository.findAll();
	}

	public Employer getById(long id) {
		 Optional<Employer> employerOptional = employerRepository.findById(id);
		 
		 if(!employerOptional.isPresent()) {
			 throw new NotFoundException("Kullanıcı bulunamadı");
		 }
		 
		 return employerOptional.get();
	}

	public Employer updateEmployer(long id, AccountDetailsUpdatedDTO accountDetailsUpdated) {
		Employer inDB = getById(id);
		inDB.setCompany(accountDetailsUpdated.getCompany());
		inDB.setEmail(accountDetailsUpdated.getEmail());
		inDB.setPhoneNumber(accountDetailsUpdated.getPhoneNumber());
		inDB.setWebsite(accountDetailsUpdated.getWebsite());
		 
		return saveEmployer(inDB);
	}

}
