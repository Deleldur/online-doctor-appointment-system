package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Patient;
import com.example.demo.service.PatientService;


@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping(value = "/api/patient")
@PreAuthorize("hasAuthority('PATIENT')")
@RestController

//@Validated
public class PatientController {

	@Autowired
	private PatientService patientService;

//	@GetMapping(value = "/")
//	public List<Patient> getAllPatients() {
//		return patientService.getAllPatients();
//	}


	@GetMapping(value = "/")
	public String patientOverview() {
//		OUT	response:
//			• profile data
//			• <appointment list>		(replaces viewAllAppointments() ??)
		return "patientOverview(): Profile info & list of appointments";
	}

	@PostMapping(value = "/request")
	public String initiateAppointment(@RequestParam String patient, String doctor, String location, String ailment) {
//		OUT	response:
//			• OK	<suggestion list>
//					- timeSlot
//					- doctor
//					- location
//			• NOK	error message ??
		return "initiateAppointment():" + "\n patient: " + patient + "\n doctor: " + doctor + "\n location: " + location + "\n ailment: " + ailment + "\n timeslot: 08:00 (hardcoded)";
	}

	@PutMapping(value = "/request")
	public String requestAppointment(@RequestParam String patient, String doctor, String ailment, String timeSlot) {
//		OUT	response:
//			• OK	confirmation
//			• NOK	error message
		return "requestAppointment():" + "\n patient: " + patient + "\n doctor: " + doctor + "\n timeSlot: " + timeSlot;
	}

	@PutMapping(value = "/appointment/feedback")
	public String giveFeedback(@RequestParam String appointmentID, String feedback) {
//		OUT	response:
//			• OK	confirmation
//			• NOK	error message
		return "giveFeedback(): feedback from the patient after an appointment";
	}

}
