package doctor.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doctor.app.models.AppointmentHistory;
import doctor.app.repository.AppointmentHistoryRepository;


@Service
public class AppointmentHistoryServiceImpl implements AppointmentHistoryService{

	
	@Autowired
	AppointmentHistoryRepository appointmentHistoryRepository;
	
	
	public List<AppointmentHistory> findAppointmentsByDoctorId(String id) {
		return appointmentHistoryRepository.findAppointmentsByDoctorId(id);
	}
	
	public List<AppointmentHistory> findAppointmentsByPatientId(String id) {
		return appointmentHistoryRepository.findAppointmentsByPatientId(id);
	}	
	
	public AppointmentHistory saveAppointmentHistory(AppointmentHistory information) {
		return appointmentHistoryRepository.save(information);
	}
}
