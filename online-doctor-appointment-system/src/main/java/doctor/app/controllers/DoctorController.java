package doctor.app.controllers;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import doctor.app.models.Doctor;
import doctor.app.models.User;
import doctor.app.repository.UserRepository;
import doctor.app.services.DoctorService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api")
@RestController
//@Validated
public class DoctorController {

	@Autowired
	private DoctorService doctorService;

	@Autowired
	UserRepository userRepository;
	
//	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
//		@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
//		@GetMapping(value = "/doctor")
//		public String getAllDoctors() {
//			return "hello";
//		}
//	public List<Doctor> getAllDoctors() {
//		return doctorService.getAllDoctors();
//	}
	
//	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	
	@PostMapping(value="/")
	public List<Doctor> findDoctorByAilment(String ailment) {
		return doctorService.findDoctorByAilment(ailment);
	}
	@GetMapping(value="/doctor/finddoctor/{id}")
	public Optional<Doctor> findDoctorById(@PathVariable(value= "id") String id) {
		return userRepository.findDoctorById(id);
	}
//	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@PostMapping(value="/location")
	public List<Doctor> findDoctorByLocation(String location) {
		return doctorService.findDoctorByLocation(location);
	}

//	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
    @PutMapping(value="doctor/updatedoctor/{id}")
    public User updateDoctor(@PathVariable(value = "id") String id,
        @RequestBody User doctorDetails) throws Exception   {
    	
		
    	User doctor = userRepository.findById(id).orElseThrow(() -> new Exception("Doctor not found for this id :: " + id));

    	return doctorService.updateDoctorProfile(doctor, doctorDetails);
     //   return ResponseEntity.ok(updatedDoctor);
    } 

	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@PostMapping(value="/test")
	public List<Doctor> findDoctorAndLocation(String firstName, String location) {
		return doctorService.findDoctorAndLocation(firstName, location);
	}
}
