package doctor.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import doctor.app.models.Appointment;
import doctor.app.models.User;
import doctor.app.repository.AppointmentRepository;
import doctor.app.services.AppointmentService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api/appointment")
@RestController
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@GetMapping(value="/")
	public List<Appointment> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}

	@GetMapping(value="/findbyid/{id}")
	public Appointment findAppointmentByAppointmentId(@PathVariable(value="id") String id) {
		return appointmentService.findAppointmentByAppointmentId(id);
	}

	// Endpoint to get specific appointments for a patient
	@GetMapping(value="/patient/{id}")
	public List<Appointment> findAppointmentByPatientId(@PathVariable(value="id") String id) {
		return appointmentService.findAppointmentByPatientId(id);
	}

	// Endpoint to get specific appointments for a doctor
	@GetMapping(value="/doctor/{id}")
	public List<Appointment> findAppointmentByDoctorId(@PathVariable(value="id") String id) {
		return appointmentService.findAppointmentByDoctorId(id);
	}

	// Endpoint to create new appointment for a patient
	@PostMapping(value="/create")
	public Appointment createAppointment(@RequestBody Appointment appointmentDetails) {		
		return appointmentRepository.save(appointmentDetails);
	}

	// Endpoint to delete specific appointments
	@DeleteMapping("/deleteappointment/{id}")
	public void deleteAppointmentByAppointmentId(@PathVariable(value="id") String id) {
		Appointment appointment = appointmentService.findAppointmentByAppointmentId(id);		
		 appointmentRepository.delete(appointment);
	}	  	
	
	// Endpoint to update specific appointment details 	
	 @PutMapping(value="/updateappointment/{id}")
	    public Appointment updateApointment(@PathVariable(value = "id") String id, @RequestBody Appointment appointmentDetails) throws Exception {	 
	    	Appointment appointment = appointmentService.findAppointmentByAppointmentId(id);	    	
	    	return appointmentService.updateAppointmentDetails(appointment, appointmentDetails);
	    } 
}
