package com.aberimen.hrms.common.language;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class LanguageService {
	
	private LanguageRepository languageRepository;
	
	public LanguageService(LanguageRepository languageRepository) {
		super();
		this.languageRepository = languageRepository;
	}
	

	public List<Language> findAll() {
		return languageRepository.findAll();
	}

}
