package com.aberimen.hrms.common.techstack;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/1.0/common")
public class TechStackController {

	private final TechStackService techStackService;

	@GetMapping("/tech-stacks")
	public List<TechStack> getAllTechStacks() {
		return techStackService.getAllTechStacks();
	}

}
