package com.example.demo.service;

import java.util.List;
import org.springframework.data.domain.Pageable;
import com.example.demo.domain.Patient;

/**
 * This is a test for a javadoc
 * @author xxx
 *
 */

public interface PatientService {

	List<Patient> getPatientByFirstName(String firstName);
	List<Patient> getAllPatients();
}