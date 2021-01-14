package doctor.app.services;

import java.util.List;

import org.springframework.stereotype.Service;

import doctor.app.models.AppointmentHistory;


public interface AppointmentHistoryService {

	List<AppointmentHistory> findAllAppointments();
	AppointmentHistory saveAppointmentHistory(AppointmentHistory information);

}
