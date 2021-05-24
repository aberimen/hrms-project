package com.aberimen.hrms.utils.validation;

import static java.lang.annotation.RetentionPolicy.RUNTIME;
import static java.lang.annotation.ElementType.FIELD;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Retention(RUNTIME)
@Target(FIELD)
@Constraint(validatedBy = { NationalIDValidator.class })
public @interface ValidNationalID {
	
	String message() default "Geçersiz TC veya zaten kayıtlı";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
	

}
