package com.example.demo.domain;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document //@Document("patient")
public class Patient {
	
	@Id
	private String id;
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	private String address;
	private String phoneNumber;
	
	

//	@Min(0)
//	private double price;
//	private String description;
	private boolean Verified;
	
	public Patient() {
		super();
	}

	public String getId() {
		return id;
	}

	public Patient setId(String id) {
		this.id = id;
		return this;
	}

	public String getFirstName() {
		return firstName;
	}

	public Patient setFirstName(String firstName) {
		this.firstName = firstName;
		return this;
	}

	public String getLastName() {
		return lastName;
	}

	public Patient setLastName(String lastName) {
		this.lastName = lastName;
		return this;
	}

	public String getAddress() {
		return address;
	}

	public Patient setAddress(String address) {
		this.address = address;
		return this;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public Patient setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
		return this;
	}

	public boolean isVerified() {
		return Verified;
	}

	public Patient setVerified(boolean verified) {
		Verified = verified;
		return  this;
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", address=" + address
				+ ", phoneNumber=" + phoneNumber + ", Verified=" + Verified + "]";
	}


}