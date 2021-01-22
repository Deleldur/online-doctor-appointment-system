package doctor.app.services;

import java.util.List;

import doctor.app.models.Appointment;
import doctor.app.models.AppointmentHistory;

public interface AppointmentService {

	List<Appointment> getAllAppointments();
	List<Appointment> findAppointmentByPatientId(String id);
	List<Appointment> findAppointmentByDoctorId(String id);
	
	
	Appointment findAppointmentByAppointmentId(String id);
	Appointment updateAppointmentDetails(Appointment orgAppointment, Appointment newAppointment);
	List<Appointment> findAppointmentsByDoctorId(String id);
	List<Appointment> findAppointmentsByPatientId(String id);
	Appointment saveAppointmentHistory(Appointment information);
	Appointment updateAppointmentHistoryDetailsDoctor(Appointment orgAppointment, Appointment newAppointment);
	Appointment updateAppointmentHistoryFeedbackPatient(Appointment orgAppointment, Appointment newAppointment);
	
}
