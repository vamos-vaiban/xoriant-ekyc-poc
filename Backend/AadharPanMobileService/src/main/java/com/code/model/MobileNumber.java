package com.code.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

public class MobileNumber {

	@NotEmpty(message = "Mobile number should be 10 digits")
	@Pattern(regexp = "[0-9]{10}", message = "Mobile number should be 10 digits")
	private String mobile_number;

	public String getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
	}

}
