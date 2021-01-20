package doctor.app.services;

import java.util.List;

import doctor.app.models.Appointment;

public interface AppointmentService {

	List<Appointment> getAllAppointments();
	List<Appointment> findAppointmentByPatientId(String id);
	List<Appointment> findAppointmentByDoctorId(String id);
	List<Appointment> findAppointmentById(String id);
	
	Appointment findAppointmentByAppointmentId(String id);
	Appointment updateAppointmentDetails(Appointment orgAppointment, Appointment newAppointment);
}
