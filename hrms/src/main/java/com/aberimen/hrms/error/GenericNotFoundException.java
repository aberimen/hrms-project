package com.aberimen.hrms.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class GenericNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 2744262836209197577L;

	public GenericNotFoundException(String message) {
		super(message);
	}
}
