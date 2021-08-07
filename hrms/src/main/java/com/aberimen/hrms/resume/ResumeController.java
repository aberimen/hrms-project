package com.aberimen.hrms.resume;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.aberimen.hrms.education.Education;
import com.aberimen.hrms.education.EducationDTO;
import com.aberimen.hrms.experience.Experience;
import com.aberimen.hrms.experience.ExperienceRequestDTO;
import com.aberimen.hrms.languageskill.LanguageSkill;
import com.aberimen.hrms.languageskill.LanguageSkillRequestDTO;
import com.aberimen.hrms.resume.dto.SocialAccountsDTO;
import com.aberimen.hrms.resume.dto.SummaryDTO;
import com.aberimen.hrms.technicalskill.TechnicalSkill;
import com.aberimen.hrms.technicalskill.TechnicalSkillRequestDTO;
import com.aberimen.hrms.utils.GenericResponse;
import com.aberimen.hrms.utils.Mapper;

@RestController
@RequestMapping("/api/1.0")
public class ResumeController {

	@Autowired
	ResumeService resumeService;

	@GetMapping("/resumes/{resumeId}")
	public Resume getCandidateResume(@PathVariable long resumeId) {
		return resumeService.getCandidateProfile(resumeId);
	}
	

	@PostMapping("/resumes/education-details")
	public Resume createEducation(@RequestBody EducationDTO educationDTO, @RequestParam long resumeId) {
		Education education = Mapper.getInstance().map(educationDTO, Education.class);
		return resumeService.saveEducation(education, resumeId);
	}

	@PostMapping("/resumes/experiences")
	public GenericResponse createExperience(@RequestBody @Valid ExperienceRequestDTO experienceRequestDTO,
			@RequestParam long resumeId) {
		Experience experience = Mapper.getInstance().map(experienceRequestDTO, Experience.class);
		resumeService.saveExperience(experience, resumeId);
		return new GenericResponse("Deneyim bilgisi eklendi.");
	}

	@PostMapping("/resumes/language-skills")
	public GenericResponse createLanguageSkill(@RequestBody LanguageSkillRequestDTO languageSkillRequestDTO,
			@RequestParam long resumeId) {
		LanguageSkill languageSkill = Mapper.getInstance().map(languageSkillRequestDTO, LanguageSkill.class);
		resumeService.saveLanguageSkill(languageSkill, resumeId);
		return new GenericResponse("Dil bilgisi eklendi.");
	}

	@PostMapping("/resumes/technical-skills")
	public GenericResponse createTechnicalSkill(@RequestBody TechnicalSkillRequestDTO technicalSkillRequestDTO,
			@RequestParam long resumeId) {
		TechnicalSkill technicalSkill = Mapper.getInstance().map(technicalSkillRequestDTO, TechnicalSkill.class);
		resumeService.saveTechnicalSkill(technicalSkill, resumeId);
		return new GenericResponse("Teknik bilgisi eklendi.");
	}

	@PostMapping("/resumes/profile-image")
	public ResponseEntity<?> createProfilePhoto(@RequestParam("file") MultipartFile file, @RequestParam long resumeId) {
		return ResponseEntity.status(HttpStatus.CREATED).body(resumeService.saveProfileImage(file, resumeId));
	}

	@PostMapping("/resumes/summary")
	public SummaryDTO createSummary(@RequestBody SummaryDTO summary, @RequestParam long resumeId) {
		return new SummaryDTO(resumeService.saveSummary(summary, resumeId));
	}

	@PostMapping("/resumes/social-accounts")
	public Resume createSocialAccounts(@RequestBody SocialAccountsDTO socialAccountsDTO,
			@RequestParam long resumeId) {
		return resumeService.saveSocialAccounts(socialAccountsDTO, resumeId);
	}

	// TODO update delete methods
	@PutMapping("/resumes/summary")
	public SummaryDTO updateSummary(@RequestBody SummaryDTO summary, @RequestParam long resumeId) {
		return new SummaryDTO(resumeService.saveSummary(summary, resumeId));
	}
	
	@PutMapping("/resumes/education-details")
	public Resume updateEducation(@RequestBody EducationDTO educationDTO, @RequestParam long resumeId) {
		Education education = Mapper.getInstance().map(educationDTO, Education.class);
		return resumeService.saveEducation(education, resumeId);
	}
	
	@PutMapping("/resumes/social-accounts")
	public Resume updateSocialAccounts(@RequestBody SocialAccountsDTO socialAccountsDTO,
			@RequestParam long resumeId) {
		return resumeService.saveSocialAccounts(socialAccountsDTO, resumeId);
	}

	
	
}
