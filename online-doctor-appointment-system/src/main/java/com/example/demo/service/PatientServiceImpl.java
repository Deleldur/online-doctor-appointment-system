package com.example.demo.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Patient;
import com.example.demo.repo.PatientRepository;


@Service
public class PatientServiceImpl implements PatientService {
	
	
	private static final Logger log = LoggerFactory.getLogger(PatientServiceImpl.class);

	@Autowired
	private PatientRepository patientRepository;

	@Override
	public List<Patient> getPatientByFirstName(String firstName) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public List<Patient> getAllPatients() {
		return patientRepository.findAll();
	}
}