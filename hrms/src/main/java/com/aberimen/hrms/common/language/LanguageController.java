package com.aberimen.hrms.common.language;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/1.0/common")
public class LanguageController {

	@Autowired
	LanguageService languageService;

	@GetMapping("/languages")
	public List<Language> getLanguages() {
		return languageService.findAll();
	}

}
