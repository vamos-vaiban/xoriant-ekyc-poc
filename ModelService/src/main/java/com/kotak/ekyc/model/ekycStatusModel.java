package com.kotak.ekyc.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ekycStatusModel {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
private int requestId;
private String status;
private String rejectionReason;


public ekycStatusModel() {
}

public ekycStatusModel(long id, int requestId, String status, String rejectionReason) {
	this.id = id;
	this.requestId = requestId;
	this.status = status;
	this.rejectionReason = rejectionReason;
}


public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public int getRequestId() {
	return requestId;
}
public void setRequestId(int requestId) {
	this.requestId = requestId;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public String getRejectionReason() {
	return rejectionReason;
}
public void setRejectionReason(String rejectionReason) {
	this.rejectionReason = rejectionReason;
}

@Override
public String toString() {
	return "ekycStatus [id=" + id + ", RequestId=" + requestId + ", Status=" + status + ", RejectionReason="
			+ rejectionReason + "]";
}


}
