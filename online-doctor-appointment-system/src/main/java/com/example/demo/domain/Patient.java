package com.example.demo.domain;

import java.util.Date;
import java.util.Set;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document //@Document("patient")
public class Patient {
	
	@Id
	private String id;
	
	@NotNull
	private String name;
	
	@Min(0)
	private double price;
	private String description;
	private boolean Verified;
	
	private Date expiry;
	
	public Patient() {
		super();
	}

	public String getId() {
		return id;
	}

	public Patient setId(String id) {
		this.id = id;
		return  this;
	}

	public String getName() {
		return name;
	}

	public Patient setName(String name) {
		this.name = name;
		return  this;
	}

	public double getPrice() {
		return price;
	}

	public Patient setPrice(double price) {
		this.price = price;
		return  this;
	}

	public String getDescription() {
		return description;
	}

	public Patient setDescription(String description) {
		this.description = description;
		return  this;
	}

	public boolean isVerified() {
		return Verified;
	}

	public Patient setVerified(boolean verified) {
		Verified = verified;
		return  this;
	}

	public Date getExpiry() {
		return expiry;
	}

	public Patient setExpiry(Date expiry) {
		this.expiry = expiry;
		return  this;
	}


}