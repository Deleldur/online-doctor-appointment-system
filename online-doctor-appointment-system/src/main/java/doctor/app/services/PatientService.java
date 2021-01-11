package doctor.app.services;

import java.util.List;

import doctor.app.models.Patient;

/**
 * This is a test for a javadoc
 * @author xxx
 *
 */

public interface PatientService {

	List<Patient> getPatientByFirstName(String firstName);
	List<Patient> getAllPatients();
}