package com.kotak.ekyc.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

public class AadharNumber {

	@NotEmpty(message = "Aadhar number should be 12 digits")
	@Pattern(regexp = "[0-9]{12}", message = "Aadhar number should be 12 digits")
	private String id_number;

	public String getId_number() {
		return id_number;
	}

	public void setId_number(String id_number) {
		this.id_number = id_number;
	}

}
