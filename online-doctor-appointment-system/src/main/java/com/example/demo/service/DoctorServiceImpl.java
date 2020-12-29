package com.example.demo.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
}
