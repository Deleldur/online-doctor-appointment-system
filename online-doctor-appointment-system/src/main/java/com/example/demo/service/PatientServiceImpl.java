package com.example.demo.service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Patient;
import com.example.demo.repo.PatientRepository;
import com.example.demo.repo.PatientRepository_mongoTemplate;

@Service
public class PatientServiceImpl implements PatientService {
	
	
	private static final Logger log = LoggerFactory.getLogger(PatientServiceImpl.class);


	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private PatientRepository_mongoTemplate patientMongoTemplate;


	@Override
	public String getPatientDescription(String id) {
		return patientRepository.findById(id).get().getDescription();
	}

	@Override
	public List<Patient> getPatientByName(String name) {
		return patientRepository.findByName(name);
	}
	
	
	@Override
	public List<Patient> getPatientByName2(String regexp) {
		return patientMongoTemplate.findPatientByName_regex(regexp);
	}

	@Override
	public List<Patient> findPatientByName2(String name) {
		return patientMongoTemplate.findPatientByName(name);
	}
	
	@Override
	public List<Patient> getAllPatient() {
		return patientRepository.findAll();
	}

	@Override
	public List<String> getAllPatientNames() {
		return patientRepository.findAll().stream().map(Patient::getName).collect(Collectors.toList());
	}

	
	@Override
	public List<Patient> getAllPatient_paged(Pageable pageable) {
		return patientRepository.findAll_paged(pageable).stream().collect(Collectors.toList());
	}
	

	@Override
	public List<Patient> findPatientByName_regex(String regexp) {
		return patientMongoTemplate.findPatientByName_regex(regexp);
	}

	@Override
	public Patient createPatient(Patient newPatient) {
		Patient Patient = new Patient().setName("Manja juice").setPrice(10.00d).setDescription("very nice").setVerified(true).setExpiry(new  Date());

		patientRepository.insert(Patient);
		return Patient;
	}

	@Override
	public Patient updatePatient(Patient patientUpdate) {
		if(patientRepository.existsById(patientUpdate.getId())) {
			patientRepository.save(patientUpdate);
		}else {
			
			log.warn("Sorry Patient with the particular id doesnt exist!");
			return patientUpdate;
			
		}
		return patientRepository.findById(patientUpdate.getId()).get();
	}

	@Override
	public boolean deletePatient(String id) {
		
		if (patientRepository.existsById(id)) {
			
			try {
				patientRepository.deleteById(id);
				
				return true;
			} catch (Exception e) {
				log.error(e.getMessage());
			}

		}
		
		return false;
	}

	@Override
	public Patient getPatientById(String id) {
		
		if (patientRepository.existsById(id)) {
			return patientRepository.findById(id).get();
		}
		
		return null;
	}


	@Scheduled(initialDelay = 1000 * 60,fixedRate=1000 * 60)
	private void checkIfPatientIsExpired() {

		System.out.println("checking if any Patient is expired...");

	}




}
