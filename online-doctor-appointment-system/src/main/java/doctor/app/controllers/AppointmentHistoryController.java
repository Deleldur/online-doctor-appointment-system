package doctor.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import doctor.app.models.Appointment;
import doctor.app.models.AppointmentHistory;
import doctor.app.services.AppointmentHistoryService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/appointmenthistory")
@RestController
public class AppointmentHistoryController {

	@Autowired
	private AppointmentHistoryService appointmentHistoryService;
	
	// Endpoint to get specific appointment history for a doctor
	@GetMapping(value="/doctor/{id}")
	public List<AppointmentHistory> findAppointmentsByDoctorId(@PathVariable(value="id") String id) {		
		return appointmentHistoryService.findAppointmentsByDoctorId(id);
	}
	
	// Endpoint to get specific appointment history  for a patient
	@GetMapping(value="/patient/{id}")
	public List<AppointmentHistory> findAppointmentsByPatientId(@PathVariable(value="id") String id) {	
		return appointmentHistoryService.findAppointmentsByPatientId(id);
	}

	// Endpoint to save appointment history 
	@PostMapping(value="/save/appointmenthistory")
	public AppointmentHistory saveAppointmentHistory(@RequestBody AppointmentHistory information) {
		return appointmentHistoryService.saveAppointmentHistory(information);
	}	
	
	// Endpoint to update specific appointment history details by a doctor	
	 @PutMapping(value="/update/appointmenthistory/doctor/{id}")
	    public AppointmentHistory updateApointmentHistoryDoctor(@PathVariable(value = "id") String id, @RequestBody AppointmentHistory appointmentDetails) throws Exception {
		 AppointmentHistory appointment = appointmentHistoryService.findAppointmentByAppointmentId(id);
		 return appointmentHistoryService.updateAppointmentHistoryDetailsDoctor(appointment, appointmentDetails);	    		
	 } 
	 
	// Endpoint to update feedback appointment details by a doctor	
	 @PutMapping(value="/update/appointmenthistory/patient/{id}")
	    public AppointmentHistory updateApointmentHistoryPatient(@PathVariable(value = "id") String id, @RequestBody AppointmentHistory appointmentDetails) throws Exception {
		 AppointmentHistory appointment = appointmentHistoryService.findAppointmentByAppointmentId(id);
		 return appointmentHistoryService.updateAppointmentHistoryFeedbackPatient(appointment, appointmentDetails);	    		
	 } 
}
