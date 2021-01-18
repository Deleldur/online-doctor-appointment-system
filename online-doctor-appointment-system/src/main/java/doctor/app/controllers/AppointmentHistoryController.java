package doctor.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import doctor.app.models.AppointmentHistory;
import doctor.app.services.AppointmentHistoryService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api")
@RestController
public class AppointmentHistoryController {

	@Autowired
	private AppointmentHistoryService appointmentHistoryService;
	
	@GetMapping(value="/appointmenthistory/doctor/{id}")
	public List<AppointmentHistory> findAppointmentsByDoctorId(@PathVariable(value="id") String id) {
		
		return appointmentHistoryService.findAppointmentsByDoctorId(id);
	}

	@GetMapping(value="/appointmenthistory/patient/{id}")
	public List<AppointmentHistory> findAppointmentsByPatientId(@PathVariable(value="id") String id) {
		
		return appointmentHistoryService.findAppointmentsByPatientId(id);
	}

	
	@PostMapping(value="/appointmenthistory")
	public AppointmentHistory saveAppointmentHistory(@RequestBody AppointmentHistory information) {
		return appointmentHistoryService.saveAppointmentHistory(information);
	}
	
}
