package com.kotak.ekyc.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

public class PanCard {
	
	@NotEmpty(message = "Pan Card should be valid")
	@Pattern(regexp = "[A-Z]{5}[0-9]{4}[A-Z]{1}", message = "Invalid pan card number")
	private String id_number;

	public String getId_number() {
		return id_number;
	}

	public void setId_number(String id_number) {
		this.id_number = id_number;
	}
}
