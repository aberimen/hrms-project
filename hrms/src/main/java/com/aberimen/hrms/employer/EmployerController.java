package com.aberimen.hrms.employer;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aberimen.hrms.employer.dto.AccountDetailsUpdatedDTO;
import com.aberimen.hrms.employer.dto.EmployerDTO;
import com.aberimen.hrms.jobposting.JobPostingService;
import com.aberimen.hrms.jobposting.dto.JobPostingResponseDTO;
import com.aberimen.hrms.utils.GenericResponse;

import lombok.AllArgsConstructor;

@CrossOrigin
@RestController
@RequestMapping("/api/1.0")
@AllArgsConstructor
public class EmployerController {

	EmployerService employerService;
	JobPostingService jobPostingService;

	@PostMapping("/employers")
	public GenericResponse register(@Valid @RequestBody Employer employer) {
		employerService.saveEmployer(employer);
		return new GenericResponse("Ekleme başarılı");
	}

	@GetMapping("/employers")
	public List<EmployerDTO> getAllEmployers() {

		return employerService.getEmployers().stream().map(EmployerDTO::new).collect(Collectors.toList());
	}

	@GetMapping("employers/{employerId}/job-postings")
	public Page<JobPostingResponseDTO> getJobPostingsOfEmployer(@PathVariable long employerId, Pageable pageable) {
		return jobPostingService.getJobPostingsOfEmployer(employerId, pageable);

	}

	@PutMapping("employers/account-details/{id}")
	public EmployerDTO updateEmployer(@PathVariable long id, @Valid @RequestBody AccountDetailsUpdatedDTO accountDetailsUpdated) {
		Employer employer = employerService.updateEmployer(id, accountDetailsUpdated);
		return new EmployerDTO(employer);
	}

}
