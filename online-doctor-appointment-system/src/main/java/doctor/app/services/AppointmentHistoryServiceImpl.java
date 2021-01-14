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
	
	
	public List<AppointmentHistory> findAllAppointments() {
		return appointmentHistoryRepository.findAll();
	}
	
	public AppointmentHistory saveAppointmentHistory(AppointmentHistory information) {
		return appointmentHistoryRepository.save(information);
	}
}
