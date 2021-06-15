package com.aberimen.hrms.common.department;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/1.0/common")
public class DepartmentController {

	@Autowired
	DepartmentService departmentService;

	@GetMapping("/departments")
	public List<Department> getAllDepartments() {
		return departmentService.findAll();
	}
}
