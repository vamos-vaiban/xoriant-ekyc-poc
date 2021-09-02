package com.code.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

public class PanCard {
	
	
	
	@NotEmpty(message = "Pan Card should be valid")
	@Pattern(regexp = "[A-Z]{5}[0-9]{4}[A-Z]{1}", message = "Invalid pan card number")
	private String pan_number;


	public String getPan_number() {
		return pan_number;
	}

	public void setPan_number(String pan_number) {
		this.pan_number = pan_number;
	}
	
}
