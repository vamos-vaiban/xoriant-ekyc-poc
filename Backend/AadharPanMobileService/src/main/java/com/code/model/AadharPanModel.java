package com.code.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_identification_values1")
public class AadharPanModel {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;

	@Column(name = "pan_number")
	private String pan_number;

	@Column(name = "aadhar_number")
	private String aadhar_number;

	@Column(name = "mobile_number")
	private String mobile_number;

	@Column(name = "Aadhaar_Linked_Mobile_no")
	private String Aadhaar_Linked_Mobile_no;

	@Column(name = "Inserted_date")
	private Date Inserted_date;

	private int user_Request_id;

	public Date getInserted_date() {
		return Inserted_date;
	}

	public void setInserted_date(Date inserted_date) {
		Date date = new Date(new java.util.Date().getTime());
		Inserted_date = date;
	}

	public String getAadhar_number() {
		return aadhar_number;
	}

	public void setAadhar_number(String aadhar_number) {
		this.aadhar_number = aadhar_number;
	}

	public String getAadhaar_Linked_Mobile_no() {
		return Aadhaar_Linked_Mobile_no;
	}

	public void setAadhaar_Linked_Mobile_no(String Aadhaar_Linked_Mobile_no) {
		this.Aadhaar_Linked_Mobile_no = Aadhaar_Linked_Mobile_no;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPan_number() {
		return pan_number;
	}

	public void setPan_number(String pan_number) {
		this.pan_number = pan_number;
	}

	public String getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
	}

	@Override
	public String toString() {
		return "AadharPanModel [id=" + id + ", pan_number=" + pan_number + ", aadhar_number=" + aadhar_number
				+ ", mobile_number=" + mobile_number + ", Aadhaar_Linked_Mobile_no=" + Aadhaar_Linked_Mobile_no
				+ ", Inserted_date=" + Inserted_date + ", user_Request_id=" + user_Request_id + "]";
	}

}
