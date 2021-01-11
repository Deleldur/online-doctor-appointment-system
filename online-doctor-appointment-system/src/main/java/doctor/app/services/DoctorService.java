package doctor.app.services;

import java.util.List;

import doctor.app.models.Doctor;

public interface DoctorService {

	List<Doctor> getAllDoctors();
	
	List<Doctor> findDoctorByAilment(String ailment);
	List<Doctor> findDoctorByLocation(String location);
	List<Doctor> findDoctorAndLocation(String firstName, String location);
	Doctor updateDoctorProfile(Doctor orgDoctor, Doctor newDoctor);
}
