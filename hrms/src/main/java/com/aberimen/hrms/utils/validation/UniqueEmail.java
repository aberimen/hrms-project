package com.aberimen.hrms.utils.validation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.FIELD, ElementType.TYPE })
@Constraint(validatedBy = { UniqueEmailValidator.class, UniqueUpdatedEmailValidator.class })
public @interface UniqueEmail {

	String message() default "Girilen email zaten kayıtlı";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};

}
