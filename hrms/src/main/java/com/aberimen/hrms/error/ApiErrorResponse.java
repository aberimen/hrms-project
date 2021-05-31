package com.aberimen.hrms.error;

import java.time.LocalDateTime;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;

@Data
@JsonInclude(Include.NON_NULL)
public class ApiErrorResponse {

	private int status;
	
	private String message;
	
	private LocalDateTime timestamp;
	
	private Map<String,String> validationErrors;
	
	private String path;
	
	public ApiErrorResponse(int status, String message, String path) {
		this.status = status;
		this.message = message;
		this.path = path;
	}
	
}
