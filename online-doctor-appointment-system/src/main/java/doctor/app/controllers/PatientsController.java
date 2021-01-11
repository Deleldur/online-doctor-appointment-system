package doctor.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import doctor.app.models.Patient;
import doctor.app.services.PatientService;

@RequestMapping(value = "/patient")
@RestController

//@Validated
public class PatientsController {

	@Autowired
	private PatientService patientService;

	
//	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@CrossOrigin(origins = { "http://localhost:8080"})
	@GetMapping(value = "/")
	public List<Patient> getAllPatients() {
		return patientService.getAllPatients();
	}
	
//	@PreAuthorize("hasAuthority('DOCTOR') OR hasAuthority('ADMIN')")
	@GetMapping(value = "/test")
	public String test() {
		return "test";
	}


}


