package com.kotak.ekyc.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "user_identification_values")
public class AadharPanModel {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer id;

	@Column(name = "pan_number")
	private String pan_number;

	@Column(name = "aadhar_number")
	private String aadhar_number;

	@Column(name = "mobile_number")
	private String mobile_number;

	@Column(name = "Aadhar_Linked_Mobile_no")
	private String Aadhar_Linked_Mobile_no;

	@Column(name = "Inserted_date")
	private Date Inserted_date;

	//@OneToOne(targetEntity = SingleSignInModel.class)
	//private SingleSignInModel SSM;

	@Column(name = "user_Request_id")
	private int user_Request_id;

	public int getUser_Request_id() {
		return user_Request_id;
	}

	public void setUser_Request_id(int user_Request_id) {
		this.user_Request_id = user_Request_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	public AadharPanModel() {
		// TODO Auto-generated constructor stub
	}

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

	public String getAadhar_Linked_Mobile_no() {
		return Aadhar_Linked_Mobile_no;
	}

	public void setAadhar_Linked_Mobile_no(String aadhar_Linked_Mobile_no) {
		Aadhar_Linked_Mobile_no = aadhar_Linked_Mobile_no;
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	/*
	 * public SingleSignInModel getSSM() { return SSM; }
	 * 
	 * public void setSSM(SingleSignInModel sSM) { SSM = sSM; }
	 */

}
