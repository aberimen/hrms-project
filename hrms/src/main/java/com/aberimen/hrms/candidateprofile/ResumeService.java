package com.aberimen.hrms.candidateprofile;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ResumeService {

	private ResumeRepository resumeRepository;

	public ResumeService(ResumeRepository resumeRepository) {
		super();
		this.resumeRepository = resumeRepository;
	}

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

	
	
}
