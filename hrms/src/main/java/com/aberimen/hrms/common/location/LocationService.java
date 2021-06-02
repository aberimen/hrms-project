package com.aberimen.hrms.common.location;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class LocationService {

	private LocationRepository locationRepository;

	public LocationService(LocationRepository locationRepository) {
		super();
		this.locationRepository = locationRepository;
	}
	
	
	public List<Location> getLocations() {
		
		return locationRepository.findAll();
	}


	public Location getById(int locationId) {

		return locationRepository.findById(locationId).get();
	}
}
