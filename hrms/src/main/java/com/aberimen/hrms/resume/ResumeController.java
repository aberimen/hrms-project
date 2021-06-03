package com.aberimen.hrms.resume;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.aberimen.hrms.education.Education;
import com.aberimen.hrms.experience.Experience;
import com.aberimen.hrms.languageskill.LanguageSkill;
import com.aberimen.hrms.resume.dto.SocialAccountsDTO;
import com.aberimen.hrms.technicalskill.TechnicalSkill;
import com.aberimen.hrms.utils.GenericResponse;

@RestController
@RequestMapping("/api/1.0")
public class ResumeController {

	@Autowired
	ResumeService resumeService;

	@GetMapping("/resumes")
	public Resume getCandidateResume(@RequestParam long resumeId) {
		return resumeService.getCandidateProfile(resumeId);
	}

	@PostMapping("/resumes/education-details")
	public GenericResponse createEducation(@RequestBody Education education, @RequestParam long resumeId) {
		resumeService.saveEducation(education, resumeId);
		return new GenericResponse("Eğitim bilgisi eklendi.");
	}

	@PostMapping("/resumes/experiences")
	public GenericResponse createExperience(@RequestBody Experience experience, @RequestParam long resumeId) {
		resumeService.saveExperience(experience, resumeId);
		return new GenericResponse("Deneyim bilgisi eklendi.");
	}

	@PostMapping("/resumes/language-skills")
	public GenericResponse createLanguageSkill(@RequestBody LanguageSkill languageSkill, @RequestParam long resumeId) {
		resumeService.saveLanguageSkill(languageSkill, resumeId);
		return new GenericResponse("Dil bilgisi eklendi.");
	}

	@PostMapping("/resumes/technical-skills")
	public GenericResponse createTechnicalSkill(@RequestBody TechnicalSkill technicalSkill,
			@RequestParam long resumeId) {
		resumeService.saveTechnicalSkill(technicalSkill, resumeId);
		return new GenericResponse("Teknik bilgisi eklendi.");
	}

	@PostMapping("/resumes/profile-image")
	public ResponseEntity<?> createProfilePhoto(@RequestParam("file") MultipartFile file, @RequestParam long resumeId) {
		return ResponseEntity.status(HttpStatus.CREATED).body(resumeService.saveProfileImage(file, resumeId));
	}

	@PostMapping("/resumes/summary")
	public void createSummary(String summary, @RequestParam long resumeId) {
		resumeService.saveSummary(summary, resumeId);
		new GenericResponse("Eğitim bilgisi eklendi.");
	}

	@PostMapping("/resumes/social-accounts")
	public GenericResponse createSocialAccounts(SocialAccountsDTO socialAccountsDTO, @RequestParam long resumeId) {
		resumeService.saveSocialAccounts(socialAccountsDTO, resumeId);
		return new GenericResponse("Sosyal medya bilgileri eklendi.");
	}

	// TODO update delete methods
}
