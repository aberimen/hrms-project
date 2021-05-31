package com.aberimen.hrms.error;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.ErrorProperties.IncludeStacktrace;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.error.ErrorAttributeOptions.Include;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

@RestController
public class ErrorHandler implements ErrorController {

	@Autowired
	private ErrorAttributes errorAtributes;

	@RequestMapping("/error")
	public ApiErrorResponse handleError(WebRequest request) {

		Map<String, Object> errorAttributes = errorAtributes.getErrorAttributes(request,
				ErrorAttributeOptions.of(Include.MESSAGE, Include.BINDING_ERRORS));

		int status = (int) errorAttributes.get("status");
		String message = (String) errorAttributes.get("message");
		String path = (String) errorAttributes.get("path");
		
		
		ApiErrorResponse errorResponse = new ApiErrorResponse(status, message, path);
		
		if(errorAttributes.containsKey("errors")) { // validasyon hatalarını içeriyorsa
			
			List<FieldError> errors = (List<FieldError>) errorAttributes.get("errors");
			Map<String, String> validationErrors = new HashMap<>();
			
			for (FieldError fieldError : errors) {
				validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
			}
			
			errorResponse.setValidationErrors(validationErrors);
		}
		
		
		return errorResponse;
	}

	@Override
	public String getErrorPath() {

		return "/error";
	}

}
