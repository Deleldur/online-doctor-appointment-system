package doctor.app.services;

import java.util.Optional;

import doctor.app.models.AppointmentHistory;
import doctor.app.models.User;

/**
 * This is a test for a javadoc
 * @author xxx
 *
 */

public interface PatientService {
	
	Optional<User> findPatientById(String id);

//	AppointmentHistory updateAppointmentFeedback(AppointmentHistory orgAppointment, AppointmentHistory newAppointment);

}