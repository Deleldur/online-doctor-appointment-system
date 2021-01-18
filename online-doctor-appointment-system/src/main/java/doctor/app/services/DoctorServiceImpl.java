package doctor.app.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doctor.app.models.Doctor;
import doctor.app.models.User;
import doctor.app.repository.UserRepository;

@Service
public class DoctorServiceImpl implements DoctorService {
	
	
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
		Map<String, String> address = new HashMap<>();
		
		//		orgDoctor.setEmail(newDoctor.getEmail());
		orgDoctor.setLastName(newDoctor.getLastName());
		orgDoctor.setFirstName(newDoctor.getFirstName());
		orgDoctor.setPhoneNumber(newDoctor.getPhoneNumber());

//		String zipCode = newDoctor.getZipCode();
//		String streetAddress = newDoctor.getStreetAddress();
//		String city = newDoctor.getCity();
		
		address.put("zipCode", newDoctor.getZipCode());
		address.put("streetAddress", newDoctor.getStreetAddress());
		address.put("city", newDoctor.getCity());
		
		orgDoctor.setAddress(address);
        final User updatedDoctor = userRepository.save(orgDoctor);

		return updatedDoctor;
	}
	
	@Override
	public List<Doctor> findDoctorAndLocation(String firstName, String location) {
		return userRepository.findDoctorAndLocation(firstName, location);
	}
	
	@Override
	public List<Doctor> findAllDoctorLocations(String role) {
		return userRepository.findAllDoctorLocations(role);
	}
	@Override
	public List<Doctor> findAllDistinctAilment() {
		List<Doctor> list = new ArrayList<>(); 
		list.addAll(userRepository.findAllDistinctAilment());
		
	return list;

	
	}

	@Override
	public List<Doctor> findAllDistinctCity() {
		return userRepository.findAllDistinctCity();
	}
}
