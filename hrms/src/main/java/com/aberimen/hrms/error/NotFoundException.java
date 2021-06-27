package com.aberimen.hrms.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class NotFoundException extends RuntimeException{

	private static final long serialVersionUID = -7099897189468355389L;
	
	public NotFoundException(String message) {
		super(message);
	}

}
