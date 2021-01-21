package doctor.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doctor.app.models.Appointment;
import doctor.app.repository.AppointmentRepository;

@Service
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Override
	public List<Appointment> getAllAppointments() {
		return appointmentRepository.findAll();
	}
	
	@Override
	public List<Appointment> findAppointmentByPatientId(String id) {
		return appointmentRepository.findByPatientId(id);
	}
	@Override
	public List<Appointment> findAppointmentByDoctorId(String id) {
		return appointmentRepository.findByDoctorId(id);
	}
	

	@Override
	public Appointment findAppointmentByAppointmentId(String id) {
		return appointmentRepository.findAppointmentById(id);
	}

	@Override
	public Appointment updateAppointmentDetails(Appointment orgAppointment, Appointment newAppointment) {	
		
		orgAppointment.setBookingDate(newAppointment.getBookingDate());
		orgAppointment.setBookingStartTime(newAppointment.getBookingStartTime());
		orgAppointment.setBookingEndTime(newAppointment.getBookingEndTime());

        final Appointment updatedAppointment = appointmentRepository.save(orgAppointment);
       
		return updatedAppointment;
	}


}
