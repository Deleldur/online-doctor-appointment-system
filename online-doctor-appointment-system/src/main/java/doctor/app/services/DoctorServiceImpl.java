package doctor.app.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import doctor.app.models.Doctor;
import doctor.app.models.User;
import doctor.app.repository.DoctorRepository;
import doctor.app.repository.UserRepository;

@Service
public class DoctorServiceImpl implements DoctorService {
	
	
	private static final Logger log = LoggerFactory.getLogger(DoctorServiceImpl.class);

	@Autowired
	UserRepository userRepository;

	
//	@Override
//	public List<User> getAllDoctors() { 
//		return userRepository.findAll();
//	}
	
	@Override
	public List<Doctor> findDoctorByAilment(String ailment) {
		return userRepository.findDoctorByAilment(ailment.toLowerCase());
	}
	
//	@Override
//	public Optional<User> findDoctorInformation(String id) {
//		return userRepository.findById(id);
//	}
	@Override
	public List<Doctor> findDoctorByLocation(String location) {
		// Converts the first letter in a search to an upper case letter (example östersund becomes Östersund)
		String firstLetterByUpperCase = location.substring(0, 1).toUpperCase() + location.substring(1);
		return userRepository.findDoctorByLocation(firstLetterByUpperCase);
	}
	
	@Override
	public Optional<User> findDoctorById(String id) {
		return userRepository.findById(id);
	}
	
	@Override
	public User updateDoctorProfile(User orgDoctor, User newDoctor) {
		
		//		orgDoctor.setEmail(newDoctor.getEmail());
		orgDoctor.setLastName(newDoctor.getLastName());
		orgDoctor.setFirstName(newDoctor.getFirstName());
		orgDoctor.setPhoneNumber(newDoctor.getPhoneNumber());
		
		Map<String, String> address = new HashMap<>();

		String zipCode = newDoctor.getZipCode();
		String streetAddress = newDoctor.getStreetAddress();
		String city = newDoctor.getCity();
		
		address.put("zipCode", zipCode);
		address.put("streetAddress", streetAddress);
		address.put("city", city);
		
		orgDoctor.setAddress(address);
        final User updatedDoctor = userRepository.save(orgDoctor);

		return updatedDoctor;
	}
	
	@Override
	public List<Doctor> findDoctorAndLocation(String firstName, String location) {
		return userRepository.findDoctorAndLocation(firstName, location);
	}
}
