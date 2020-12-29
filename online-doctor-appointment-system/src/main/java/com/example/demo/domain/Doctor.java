package com.example.demo.domain;

import java.util.Map;

import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Doctor extends User{

	private String ailmentSpecialist;
	


	public Doctor() {
		super();
	}

	public Doctor(String firstName, String lastName, Map<String, String> address, String phoneNumber, String email) {
		super(firstName, lastName, address, phoneNumber, email);

	}

	public String getAilmentSpecialist() {
		return ailmentSpecialist;
	}

	public void setAilmentSpecialist(String ailmentSpecialist) {
		this.ailmentSpecialist = ailmentSpecialist;
	}
}
