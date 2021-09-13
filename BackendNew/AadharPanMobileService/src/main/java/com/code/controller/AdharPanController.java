package com.code.controller;

import java.util.Date;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.code.model.AadharNumber;
import com.code.model.AadharPanModel;
import com.code.model.MobileNumber;
import com.code.model.PanCard;
import com.code.service.PanAadharService;

@RestController
//@RequestMapping("/api")
public class AdharPanController {

	@Autowired
	private PanAadharService service;

	@PostMapping("/PanNumber")
	public String panNumValidation(@Valid @RequestBody PanCard panNumber) {
		return "Pan Number is Valid";
	}

	@PostMapping("/AadharNumber")
	public String aadharNumValidations(@Valid @RequestBody AadharNumber aadharNumber) {
		return "Aadhar Number Is Valid";
	}

	@PostMapping("/MobileNumber")
	public String mobileNumberValidations(@Valid @RequestBody MobileNumber mobileNumber) {
		return "Mobile Number is valid";

	}

	//Save all details if valid
	@PostMapping("/PanAadharMobile")
	public ResponseEntity<AadharPanModel> saveAlldetails(@RequestBody AadharPanModel aadharPanModel) {
		aadharPanModel.setInserted_date(new Date(new java.util.Date().getTime()));
		System.out.println(aadharPanModel);
		AadharPanModel aadharPan = service.saveDetails(aadharPanModel);
		System.out.println(aadharPan.getAadhar_number());
		System.out.println(aadharPan);
		return new ResponseEntity<AadharPanModel>(aadharPan, HttpStatus.OK);
	}

	@RequestMapping(value = "update/{request_Id}", method = RequestMethod.PUT)
	public ResponseEntity<Object> updateData(@PathVariable("request_Id") int request_Id,
			@RequestBody AadharPanModel apm) throws DataNotFoundExceptions {
		boolean isDataExist = service.isDataExist(request_Id);
		if (isDataExist) {
			apm.setId(request_Id);
			service.update(apm);
			return new ResponseEntity<Object>("Data updated successfully", HttpStatus.OK);
		} else {
			throw new DataNotFoundExceptions();
		}

	}
/*
	@GetMapping(path = { "/email", "email/{str}" })
	public String getData(@PathVariable String str) {
		String mobileNo;
		String emailId;
		boolean mobileNum = isValidMobileNo(str);
		boolean email = isValidEmail(str);
		// System.out.println(mobileNum);
		if (mobileNum == true) {
			mobileNo = str;
			System.out.println(generateOTP(6));
			System.out.println("it's mobile number");
			return mobileNo;
		} else if (email == true) {
			emailId = str;
			System.out.println(generateOTP(6));
			System.out.println("it's email id");
			return emailId;
		} else {
			return "give proper Mobile Number & Email Id";
		}

		// System.out.println(str);
		// return str;
	}

	public static boolean isValidMobileNo(String str) {
		// (0/91): number starts with (0/91)
		// [7-9]: starting of the number may contain a digit between 0 to 9
		// [0-9]: then contains digits 0 to 9
		Pattern ptrn = Pattern.compile("(0/91)?[7-9][0-9]{9}");
		// the matcher() method creates a matcher that will match the given input
		// against this pattern
		Matcher match = ptrn.matcher(str);
		// returns a boolean value
		return (match.find() && match.group().equals(str));
	}

	public static boolean isValidEmail(String email) {
		String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@" + "(?:[a-zA-Z0-9-]+\\.)+[a-z"
				+ "A-Z]{2,7}$";

		Pattern pat = Pattern.compile(emailRegex);
		if (email == null)
			return false;
		return pat.matcher(email).matches();
	}

	private static char[] generateOTP(int length) {
		String numbers = "1234567890";
		Random random = new Random();
		char[] otp = new char[length];

		for (int i = 0; i < length; i++) {
			otp[i] = numbers.charAt(random.nextInt(numbers.length()));
		}
		return otp;
	}*/

}
