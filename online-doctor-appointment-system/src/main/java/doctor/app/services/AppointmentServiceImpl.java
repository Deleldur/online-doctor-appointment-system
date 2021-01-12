package doctor.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Appointment;

import doctor.app.repository.AppointmentRepository;

@Service
public class AppointmentServiceImpl implements AppointmentService {


	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Override
	public List<Appointment> getAllAppointments() {
		return appointmentRepository.findAll();
	}

}
