package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Patient;
import com.example.demo.service.PatientService;

@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping(value = "/api/doctor")
@PreAuthorize("hasAuthority('DOCTOR')")
@RestController
@Validated
public class DoctorController {

//	@Autowired
//	private PatientService patientService;

	@GetMapping(value = "/{id}")
	public String doctorOverview(@PathVariable String id) {
//		OUT	response:
//			• profile data
		return "doctorOverview(): Profile info for doctor #" + id;
	}


	@PutMapping(value = "/profile/update")
	public String updateProfile(@RequestParam String id, String info, String name, String tel, String loc) {
//		OUT	response:
//			• OK	confirmation
//			• NOK	error message
		return "updateProfile(): Updated profile info:" + "\n id: "+ id + "\n info: " + info + "\n name: " + name + "\n tel: " + tel + "\n loc: " + loc;
	}


	@GetMapping(value = "/appointment/list_requests")
	public String viewAllAppointmentRequests(String doctorID) {
//		OUT	response:
//			• <appointment list>
//				- timeSlot
//				- patient
//				- problem/ailment
		return "viewAllAppointmentRequests(): List of all requested/unconfirmed appointments";
	}

	
	@PostMapping(value = "/appointment/confirm_request")
	public String confirmAppointmentRequest(String appointmentID) {
//		OUT	response:
//			• OK	confirmation
//			• OK	notification via email to patient
//			• NOK	error message
		return "confirmAppointmentRequest(): Confirm a requested appointment";
	}


	@PostMapping(value = "/appointment/update")
	public String updateAppointment(String appointmentID, String blaBlaBla) {
//		OUT	response:
//			• OK	confirmation
//			• OK	notification via email to patient
//			• NOK	error message
		return "updateAppointment(): Updates an appointment with new or changed info";
	}

	
	@GetMapping(value = "/appointment/list_appointments")
	public String viewAllAppointments(String doctorID) {
//		OUT	response:
//			• <appointment list>
//				- timeSlot
//				- patient
//				- problem/ailment
//				- ??
		return "viewAllAppointments(): List of all confirmed appointments";
	}


	@GetMapping(value = "/appointment/feedback")
	public String viewFeedback(String appointmentID) {
//		OUT	response:
//			• feedback data
		return "viewFeedback(): Patient feedback from an appointment";
	}

	
	@GetMapping(value = "/appointment/report")
	public String generateReport(String doctorID, String month) {
//		OUT	response:
//		• exported text-based file (pdf, xls)
//		• exported graphical file (pdf, xls) ?
		return "generateReport(): Downloadable file in pdf or xls format";
	}

}

