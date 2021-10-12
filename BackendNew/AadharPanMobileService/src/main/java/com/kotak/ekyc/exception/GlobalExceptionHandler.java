package com.kotak.ekyc.exception;



import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	//handling custom validation errors
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErrorsDetails> customValidaationExceptions(MethodArgumentNotValidException exception){
		ErrorsDetails errorDetails= new ErrorsDetails(new Date(),"Validation error",
				exception.getBindingResult().getFieldError().getDefaultMessage());
		return new ResponseEntity<ErrorsDetails>(errorDetails,HttpStatus.BAD_REQUEST);
	}

}
