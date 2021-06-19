package com.aberimen.hrms.common.techstack;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TechStackService {

	final private TechStackRepository techStackRepository;
	
	public List<TechStack> getAllTechStacks() {
		return techStackRepository.findAll();
	}

}
