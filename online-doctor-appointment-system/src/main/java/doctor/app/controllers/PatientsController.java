package doctor.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import doctor.app.models.Doctor;
import doctor.app.models.Patient;
import doctor.app.repository.UserRepository;
import doctor.app.services.PatientService;

@RequestMapping(value = "/api")
@RestController

//@Validated
public class PatientsController {

	@Autowired
	private PatientService patientService;

	@Autowired
	UserRepository userRepository;
	
	@GetMapping(value="/patient/findpatient/{id}")
	public Optional<Patient> findPatientById(@PathVariable(value= "id") String id) {
		return userRepository.findPatientById(id);
	}


}



