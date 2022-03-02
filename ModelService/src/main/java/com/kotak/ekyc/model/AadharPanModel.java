package com.kotak.ekyc.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;


@Entity
@Table(name = "user_identification_values")
public class AadharPanModel {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "pan_number")
	private String pan_number;

	@Column(name = "aadhar_number")
	private String aadhar_number;

	@Column(name = "mobile_number")
	private String mobile_number;

	@Column(name = "Aadhar_Linked_Mobile_no")
	private String Aadhar_Linked_Mobile_no;

	@Column(name = "account_number")
	private long accountNumber;

	@Column(name = "crn_number")
	private String CRN;

	@Column(name = "Inserted_date")
	private Date Inserted_date;

	@OneToOne
	@JoinColumn(name = "user_Request_id")
	private SingleSignInModel singleSignInModel;

	@Column(name= "full_name")
	private String fullName;

	@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd/MM/yyyy")
	@Temporal(TemporalType.DATE)
	@Column(name = "date_of_birth")
	private Date dateOfBirth;

	public SingleSignInModel getSingleSignInModel() {
		return singleSignInModel;
	}

	public void setSingleSignInModel(SingleSignInModel singleSignInModel) {
		this.singleSignInModel = singleSignInModel;
	}

//	@Column(name = "user_Request_id")
//	private int user_Request_id;

//	public int getUser_Request_id() {
//		return user_Request_id;
//	}
//
//	public void setUser_Request_id(int user_Request_id) {
//		this.user_Request_id = user_Request_id;
//	}

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

	public long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getCRN() {
		return CRN;
	}

	public void setCRN(String CRN) {
		this.CRN = CRN;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
}
