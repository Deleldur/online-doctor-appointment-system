package doctor.app.services;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doctor.app.models.Patient;
import doctor.app.models.User;
import doctor.app.repository.UserRepository;


@Service
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public Optional<User> findPatientById(String id) {
		return userRepository.findById(id);
	}
}
