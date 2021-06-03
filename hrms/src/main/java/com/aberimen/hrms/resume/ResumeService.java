package com.aberimen.hrms.resume;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.aberimen.hrms.error.BadRequestException;
import com.aberimen.hrms.error.GenericNotFoundException;
import com.aberimen.hrms.utils.CloudinaryService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ResumeService {

	private ResumeRepository resumeRepository;
	private CloudinaryService cloudinaryService;


	public List<Resume> getCandidateProfile(long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	public void saveEducation(long userId) {
		// TODO Auto-generated method stub

	}

	public void saveExperience(long userId) {
		// TODO Auto-generated method stub

	}

	public void saveLanguageSkill(long userId) {
		// TODO Auto-generated method stub

	}

	public void saveTechnicalSkill(long userId) {
		// TODO Auto-generated method stub

	}

	public void saveProfileImage(MultipartFile multipartFile, long resumeId) {
		Optional<Resume> resumeInDBOptional = resumeRepository.findById(resumeId);
		
		if(multipartFile == null ) {
			throw new BadRequestException("Dosya null olamaz");
		}
		
		if(!resumeInDBOptional.isPresent()) {
			throw new GenericNotFoundException("CV bulunamadı");
		}
		
		Resume inDB = resumeInDBOptional.get();
		
		try {
			
			Map<?, ?> result = cloudinaryService.upload(multipartFile);
			String imgURL = (String) result.get("url");
			inDB.setProfileImage(imgURL);
			
			resumeRepository.save(inDB);
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	

}
