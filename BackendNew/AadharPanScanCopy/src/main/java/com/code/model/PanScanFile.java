package com.code.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class PanScanFile {
	
	@Id
	private int id;
	private String panFile;
	
	public PanScanFile() {
		// TODO Auto-generated constructor stub
	}
	
	public PanScanFile(int id, String panFile) {
		this.id = id;
		this.panFile = panFile;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPanFile() {
		return panFile;
	}
	public void setPanFile(String panFile) {
		this.panFile = panFile;
	}
	
}