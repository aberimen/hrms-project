package com.aberimen.hrms.resume;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.aberimen.hrms.education.Education;
import com.aberimen.hrms.experience.Experience;
import com.aberimen.hrms.languageskill.LanguageSkill;
import com.aberimen.hrms.resume.dto.SocialAccountsDTO;
import com.aberimen.hrms.technicalskill.TechnicalSkill;
import com.aberimen.hrms.utils.GenericResponse;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class ResumeController {

	@Autowired
	ResumeService resumeService;
	
	@GetMapping("/resumes/{resumeId}")
	public List<Resume> getCandidateResume(@PathVariable long resumeId) {
		
		return resumeService.getCandidateProfile(resumeId);
	}
	
	@PostMapping("/resumes/education-details/{resumeId}")
	public void createEducation(@RequestBody Education education, @PathVariable long resumeId) {
		
		resumeService.saveEducation(resumeId);
	}
	
	@PostMapping("/resumes/experiences/{resumeId}")
	public void createExperience(@RequestBody Experience experience, @PathVariable long resumeId) {
		
		resumeService.saveExperience(resumeId);
	}
	
	@PostMapping("/resumes/language-skills/{resumeId}")
	public void createLanguageSkill(@RequestBody LanguageSkill languageSkill, @PathVariable long resumeId) {
		
		resumeService.saveLanguageSkill(resumeId);
	}
	
	@PostMapping("/resumes/technical-skills/{resumeId}")
	public void createTechnicalSkill(@RequestBody TechnicalSkill technicalSkill, @PathVariable long resumeId) {
		
		resumeService.saveTechnicalSkill(resumeId);
	}
	
	@PostMapping("/resumes/profile-image")
	public ResponseEntity<?> createProfilePhoto(MultipartFile file, @RequestParam long resumeId) {
		
		resumeService.saveProfileImage(file, resumeId);
		return ResponseEntity.status(HttpStatus.CREATED).body(new GenericResponse("profil fotoğrafı eklendi"));
	}
	
	@PostMapping("/resumes/summary/{resumeId}")
	public void createSummary(String summary, @PathVariable long resumeId) {
		//TODO add summary api
		
	}
	
	@PostMapping("/resumes/social-accounts/{resumeId}")
	public void createSocialAccounts(SocialAccountsDTO socialAccountsDTO, @PathVariable long resumeId) {
		//TODO add social accounts api
		
	}
	
	
	//TODO update delete methods
}
