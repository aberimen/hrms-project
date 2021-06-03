package com.aberimen.hrms.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException{
	
	private static final long serialVersionUID = 2744262836209197577L;

	public BadRequestException(String message) {
		super(message);
	}
}
