package com.kotak.ekyc.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ekycStatusModel {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long id;
private int RequestId;
private String Status;
private String RejectionReason;


public ekycStatusModel() {
}

public ekycStatusModel(long id, int requestId, String status, String rejectionReason) {
	this.id = id;
	RequestId = requestId;
	Status = status;
	RejectionReason = rejectionReason;
}


public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public int getRequestId() {
	return RequestId;
}
public void setRequestId(int requestId) {
	RequestId = requestId;
}
public String getStatus() {
	return Status;
}
public void setStatus(String status) {
	Status = status;
}
public String getRejectionReason() {
	return RejectionReason;
}
public void setRejectionReason(String rejectionReason) {
	RejectionReason = rejectionReason;
}

@Override
public String toString() {
	return "ekycStatus [id=" + id + ", RequestId=" + RequestId + ", Status=" + Status + ", RejectionReason="
			+ RejectionReason + "]";
}


}
