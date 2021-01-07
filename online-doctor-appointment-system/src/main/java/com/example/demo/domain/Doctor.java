package com.example.demo.domain;

import java.util.List;
import java.util.Map;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Doctor extends User{

	private List<String> ailmentList;

	public Doctor() {
		super();
	}

	public Doctor(String firstName, String lastName, Map<String, String> address, String phoneNumber, String email, List<String> ailmentList) {
		super(firstName, lastName, address, phoneNumber, email);
		this.ailmentList = ailmentList;
	}

	public List<String> getAilmentList() {
		return ailmentList;
	}

	public void setAilmentList(List<String> ailmentList) {
		this.ailmentList = ailmentList;
	}
}
