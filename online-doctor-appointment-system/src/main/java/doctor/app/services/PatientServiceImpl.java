package doctor.app.services;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doctor.app.models.AppointmentHistory;
import doctor.app.models.User;
import doctor.app.repository.AppointmentHistoryRepository;
import doctor.app.repository.UserRepository;

@Service
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	private UserRepository userRepository;
	
//	@Autowired
//	private AppointmentHistoryRepository appointmentHistoryRepository;

	@Override
	public Optional<User> findPatientById(String id) {
		return userRepository.findById(id);
	}
	
	// Update feedback in appointment history patient
//	@Override
//	public AppointmentHistory updateAppointmentHistoryFeedbackPatient(AppointmentHistory orgAppointment, AppointmentHistory newAppointment) {	
//		orgAppointment.setPatientFeedback(newAppointment.getPatientFeedback());
//
//        final AppointmentHistory updatedAppointment = appointmentHistoryRepository.save(orgAppointment);
//       
//		return updatedAppointment;
//	}
}
