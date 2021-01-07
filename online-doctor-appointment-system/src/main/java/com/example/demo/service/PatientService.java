package com.example.demo.service;

import java.util.List;
import com.example.demo.domain.Patient;

public interface PatientService {

	String getPatientDescription(String id);
	
	List<Patient> getPatientByName2(String regexp);
	
	List<Patient> findPatientByName2(String name);
	
	List<Patient> getAllPatients();

	List<String> getAllPatientNames();
	
	
	List<Patient> getAllPatients_paged(Pageable pageable);
	
	List<Patient> findPatientByName_regex(String regexp);

	Patient createPatient(Patient newPatient);

	Patient updatePatient(Patient userUpdate);

	boolean deletePatient(String id);

	Patient getPatientById(String id);

	List<Patient> getPatientByName(String name);
	
}