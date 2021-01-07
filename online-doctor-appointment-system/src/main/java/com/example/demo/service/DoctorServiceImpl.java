package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Doctor;
import com.example.demo.repo.DoctorRepository;

@Service
public class DoctorServiceImpl implements DoctorService {
	
	
	private static final Logger log = LoggerFactory.getLogger(DoctorServiceImpl.class);

	@Autowired
	private DoctorRepository doctorRepository;

	
	@Override
	public List<Doctor> getAllDoctors() { 
		return doctorRepository.findAll();
	}
	
	@Override
	public List<Doctor> findDoctorByAilment(String ailment) {
		return doctorRepository.findDoctorByAilment(ailment.toLowerCase());
	}
	
	@Override
	public List<Doctor> findDoctorByLocation(String location) {
		// Converts the first letter in a search to an upper case letter (example östersund becomes Östersund)
		String firstLetterByUpperCase = location.substring(0, 1).toUpperCase() + location.substring(1);
		return doctorRepository.findDoctorByLocation(firstLetterByUpperCase);
	}
	@Override
	public Doctor updateDoctorProfile(Doctor orgDoctor, Doctor newDoctor) {
		orgDoctor.setEmail(newDoctor.getEmail());
		orgDoctor.setLastName(newDoctor.getLastName());
		orgDoctor.setFirstName(newDoctor.getFirstName());
        final Doctor updatedDoctor = doctorRepository.save(orgDoctor);

		return updatedDoctor;
	}
	@Override
	public List<Doctor> findDoctorAndLocation(String firstName, String location) {
		return doctorRepository.findDoctorAndLocation(firstName, location);
	}
}
