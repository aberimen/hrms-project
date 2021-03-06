package com.aberimen.hrms.resume;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.aberimen.hrms.education.Education;
import com.aberimen.hrms.error.BadRequestException;
import com.aberimen.hrms.error.GenericNotFoundException;
import com.aberimen.hrms.experience.Experience;
import com.aberimen.hrms.languageskill.LanguageSkill;
import com.aberimen.hrms.resume.dto.SocialAccountsDTO;
import com.aberimen.hrms.resume.dto.SummaryDTO;
import com.aberimen.hrms.technicalskill.TechnicalSkill;
import com.aberimen.hrms.utils.CloudinaryService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ResumeService {

	private ResumeRepository resumeRepository;
	private CloudinaryService cloudinaryService;

	public Resume getCandidateProfile(long userId) {
		return getResumeById(userId);
	}

	public Resume saveEducation(Education education, long resumeId) {
		Resume inDB = getResumeById(resumeId);
		education.setResume(inDB);
		inDB.getEducationDetails().add(education);
		
		return resumeRepository.save(inDB);
	}

	public List<Experience> saveExperience(Experience experience, long resumeId) {
		Resume inDB = getResumeById(resumeId);
		experience.setResume(inDB);
		inDB.getExperiences().add(experience);
		resumeRepository.save(inDB);
		return inDB.getExperiences();
	}

	public void saveLanguageSkill(LanguageSkill languageSkill, long resumeId) {
		Resume inDB = getResumeById(resumeId);
		languageSkill.setResume(inDB);
		inDB.getLanguageSkills().add(languageSkill);

		resumeRepository.save(inDB);

	}

	public void saveTechnicalSkill(TechnicalSkill technicalSkill, long resumeId) {
		Resume inDB = getResumeById(resumeId);
		technicalSkill.setResume(inDB);
		inDB.getTechnicalSkills().add(technicalSkill);

		resumeRepository.save(inDB);

	}

	public String saveProfileImage(MultipartFile multipartFile, long resumeId) {
		Resume inDB = getResumeById(resumeId);

		if (multipartFile == null) {
			throw new BadRequestException("Dosya null olamaz");
		}
		// desteklenen resim t??rleri
		if (!Arrays.asList("jpeg", "png", "gif").stream().anyMatch(multipartFile.getContentType()::contains)) {
			throw new BadRequestException("Ge??ersiz resim dosyas??");
		}

		Map<?, ?> result;
		try {
			result = cloudinaryService.upload(multipartFile);
			String imgURL = (String) result.get("url");
			inDB.setProfileImage(imgURL);
			resumeRepository.save(inDB);
		} catch (IOException e) {
			throw new BadRequestException(e.getMessage());
		}

		return (String) result.get("url");
	}

	public Resume getResumeById(long resumeId) {
		Optional<Resume> resumeInDBOptional = resumeRepository.findById(resumeId);

		if (!resumeInDBOptional.isPresent()) {
			throw new GenericNotFoundException("CV bulunamad??");
		}

		return resumeInDBOptional.get();
	}

	public String saveSummary(SummaryDTO summary, long resumeId) {
		Resume inDB = getResumeById(resumeId);
		inDB.setSummary(summary.getSummary());

		resumeRepository.save(inDB);
		
	   return inDB.getSummary();
	}

	public Resume saveSocialAccounts(SocialAccountsDTO socialAccountsDTO, long resumeId) {
		Resume inDB = getResumeById(resumeId);
		inDB.setGithubAccount(socialAccountsDTO.getGithubAccount());
		inDB.setLinkedinAccount(socialAccountsDTO.getLinkedinAccount());

		return resumeRepository.save(inDB);
	}
	

}
