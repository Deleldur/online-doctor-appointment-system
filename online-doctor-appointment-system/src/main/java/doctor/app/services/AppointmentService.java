package doctor.app.services;

import java.util.List;

import doctor.app.models.Appointment;

public interface AppointmentService {

	List<Appointment> getAllAppointments();
	
}
