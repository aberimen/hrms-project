package com.aberimen.hrms.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class UnauthorizedException extends RuntimeException {

	private static final long serialVersionUID = 4027811255386446374L;

	public UnauthorizedException(String message) {
		super(message);
	}
}
