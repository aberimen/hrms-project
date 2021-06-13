package com.aberimen.hrms.common.location;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/1.0/common")
@RestController
public class LocationController {

	@Autowired
	private LocationService locationService;

	@GetMapping("/locations")
	public List<Location> getAllLocations() {
		return locationService.getLocations();
	}

}
