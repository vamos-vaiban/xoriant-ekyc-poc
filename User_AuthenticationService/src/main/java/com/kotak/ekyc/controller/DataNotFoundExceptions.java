package com.kotak.ekyc.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class DataNotFoundExceptions extends Exception {
	
	private static final long serialVersionUID = 1L;

	@ExceptionHandler(value = DataNotFoundExceptions.class)
	public ResponseEntity<Object> exception(DataNotFoundExceptions exceptions){
		return new ResponseEntity<Object>("data not found",HttpStatus.NOT_FOUND);
	}

}
