package com.code.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_authentication1")
public class SingleSign implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	// @GeneratedValue(strategy = GenerationType.AUTO)
	private int request_Id;
	private String mode_Of_Authentication;
	private String email_id;
	private int email_id_otp;
	private String mobile_number;
	private String mobile_number_otp;
	private Date login_start_time;
	private Date login_end_time;

	/*
	 * @JoinTable(name = "user_identification_values", joinColumns = {
	 * 
	 * @JoinColumn(name = "request_Id") }, inverseJoinColumns = { @JoinColumn(name =
	 * "user_Request_id") })
	 */

	@OneToOne()
	private AadharPanModel aadharPan;

	public SingleSign() {
		// TODO Auto-generated constructor stub
	}

	public SingleSign(int request_Id, String mode_Of_Authentication, String email_id, int email_id_otp,
			String mobile_number, String mobile_number_otp, Date login_start_time, Date login_end_time) {
		super();
		this.request_Id = request_Id;
		this.mode_Of_Authentication = mode_Of_Authentication;
		this.email_id = email_id;
		this.email_id_otp = email_id_otp;
		this.mobile_number = mobile_number;
		this.mobile_number_otp = mobile_number_otp;
		this.login_start_time = login_start_time;
		this.login_end_time = login_end_time;
	}

	public int getRequest_Id() {
		return request_Id;
	}

	public void setRequest_Id(int request_Id) {
		this.request_Id = request_Id;
	}

	public String getMode_Of_Authentication() {
		return mode_Of_Authentication;
	}

	public void setMode_Of_Authentication(String mode_Of_Authentication) {
		this.mode_Of_Authentication = mode_Of_Authentication;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public int getEmail_id_otp() {
		return email_id_otp;
	}

	public void setEmail_id_otp(int email_id_otp) {
		this.email_id_otp = email_id_otp;
	}

	public String getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
	}

	public String getMobile_number_otp() {
		return mobile_number_otp;
	}

	public void setMobile_number_otp(String mobile_number_otp) {
		this.mobile_number_otp = mobile_number_otp;
	}

	public Date getLogin_start_time() {
		return login_start_time;
	}

	public void setLogin_start_time(Date date2) {
		Date date = new Date(new java.util.Date().getTime());
		login_start_time = date;
	}

	public Date getLogin_end_time() {
		return login_end_time;
	}

	public void setLogin_end_time(Date login_end_time) {
		this.login_end_time = login_end_time;
	}

}
