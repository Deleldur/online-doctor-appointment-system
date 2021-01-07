package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.Doctor;

public interface DoctorService {

	List<Doctor> getAllDoctors();
	
	List<Doctor> findDoctorByAilment(String ailment);
	List<Doctor> findDoctorByLocation(String location);
	List<Doctor> findDoctorAndLocation(String firstName, String location);
	Doctor updateDoctorProfile(Doctor orgDoctor, Doctor newDoctor);
}
