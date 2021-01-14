package doctor.app.services;

import java.util.List;
import java.util.Optional;

import doctor.app.models.Doctor;
import doctor.app.models.User;

public interface DoctorService {

//	List<Doctor> getAllDoctors();
	Optional<User> findDoctorById(String id);
	List<Doctor> findDoctorByAilment(String ailment);
	List<Doctor> findDoctorByLocation(String location);
	List<Doctor> findDoctorAndLocation(String firstName, String location);
//	Optional<User> findDoctorInformation(String id);
	User updateDoctorProfile(User orgDoctor, User newDoctor);
	List<Doctor> findAllDoctorLocations(String role);
}
