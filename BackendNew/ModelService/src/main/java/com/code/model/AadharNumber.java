package com.code.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

public class AadharNumber {

	@NotEmpty(message = "Aadhar number should be 12 digits")
	@Pattern(regexp = "[0-9]{12}", message = "Aadhar number should be 12 digits")
	private String Aadhar_number;

	public String getAadhar_number() {
		return Aadhar_number;
	}

	public void setAadhar_number(String aadhar_number) {
		this.Aadhar_number = aadhar_number;
	}

}
