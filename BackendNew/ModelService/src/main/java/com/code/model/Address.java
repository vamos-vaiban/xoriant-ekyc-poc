package com.code.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_communication_address")
public class Address {

	@Id
	//@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	private String house_no;
	private String address_line_1;
	private String address_line_2;
	private String address_line_3;
	private String city;
	private String state;
	private String landmark;
	private Long pincode;
	private Date inserted_date;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getHouse_no() {
		return house_no;
	}

	public void setHouse_no(String house_no) {
		this.house_no = house_no;
	}

	public String getAddress_line_1() {
		return address_line_1;
	}

	public void setAddress_line_1(String address_line_1) {
		this.address_line_1 = address_line_1;
	}

	public String getAddress_line_2() {
		return address_line_2;
	}

	public void setAddress_line_2(String address_line_2) {
		this.address_line_2 = address_line_2;
	}

	public String getAddress_line_3() {
		return address_line_3;
	}

	public void setAddress_line_3(String address_line_3) {
		this.address_line_3 = address_line_3;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

	public Long getPincode() {
		return pincode;
	}

	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}

	public Date getInserted_date() {
		return inserted_date;
	}

	public void setInserted_date(Date inserted_date) {
		this.inserted_date = inserted_date;
	}
}
