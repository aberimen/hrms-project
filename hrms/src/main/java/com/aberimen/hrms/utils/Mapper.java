package com.aberimen.hrms.utils;

import org.modelmapper.ModelMapper;

public class Mapper {
	
	private static ModelMapper instance = null;
	
	private Mapper() {
		
	}
	
	public static ModelMapper getInstance() {
		if(instance == null) {
			instance = new ModelMapper();
		}
		return instance;
	}
	
	

}
