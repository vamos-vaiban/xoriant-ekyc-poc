package com.code.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_authentication")
public class SingleSign implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private int request_Id;
	private String mode_Of_Authentication;
	private String email_id;
	private int email_id_otp;
	private String password;
	private Date login_start_time;
	private Date login_end_time;

	
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getLogin_start_time() {
		return login_start_time;
	}

	public void setLogin_start_time(Date login_start_time) {
		this.login_start_time = login_start_time;
	}

	public Date getLogin_end_time() {
		return login_end_time;
	}

	public void setLogin_end_time(Date login_end_time) {
		this.login_end_time = login_end_time;
	}

}
