package doctor.app.services;

import java.util.List;
import java.util.Optional;

import doctor.app.models.Patient;
import doctor.app.models.User;

/**
 * This is a test for a javadoc
 * @author xxx
 *
 */

public interface PatientService {

	
	Optional<User> findPatientById(String id);

}