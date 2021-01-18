package doctor.app.services;

import java.util.List;

import org.springframework.stereotype.Service;

import doctor.app.models.AppointmentHistory;


public interface AppointmentHistoryService {

	List<AppointmentHistory> findAppointmentsByDoctorId(String id);
	List<AppointmentHistory> findAppointmentsByPatientId(String id);
	AppointmentHistory saveAppointmentHistory(AppointmentHistory information);

}
