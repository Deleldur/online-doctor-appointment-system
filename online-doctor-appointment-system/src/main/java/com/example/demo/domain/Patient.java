package com.example.demo.domain;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document //@Document("patient")
//public class Patient extends User {
public class Patient extends User {	

	private boolean verified;
	
	public Patient() {
		super();
	}
	

	public Patient(String firstName, String lastName, String address, String phoneNumber,
			boolean verified) {
		super(firstName, lastName, address, phoneNumber);
		this.verified = verified;
	}


	public boolean isVerified() {
		return verified;
	}


	public void setVerified(boolean verified) {
		this.verified = verified;
	}

}