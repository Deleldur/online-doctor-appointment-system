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
import doctor.app.models.AppointmentHistory;
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

	@GetMapping(value = "/")
	public List<Appointment> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}

	@GetMapping(value = "/findbyid/{id}")
	public Appointment findAppointmentByAppointmentId(@PathVariable(value = "id") String id) {
		return appointmentService.findAppointmentByAppointmentId(id);
	}

	// Endpoint to get specific appointments for a patient
	@GetMapping(value = "/patient/{id}")
	public List<Appointment> findAppointmentByPatientId(@PathVariable(value = "id") String id) {
		return appointmentService.findAppointmentByPatientId(id);
	}

	// Endpoint to get specific appointments for a doctor
	@GetMapping(value = "/doctor/{id}")
	public List<Appointment> findAppointmentByDoctorId(@PathVariable(value = "id") String id) {
		return appointmentService.findAppointmentByDoctorId(id);
	}

	// Endpoint to create new appointment for a patient
	@PostMapping(value = "/create")
	public Appointment createAppointment(@RequestBody Appointment appointmentDetails) {
		return appointmentRepository.save(appointmentDetails);
	}

	// Endpoint to delete specific appointments
	@DeleteMapping("/deleteappointment/{id}")
	public void deleteAppointmentByAppointmentId(@PathVariable(value = "id") String id) {
		Appointment appointment = appointmentService.findAppointmentByAppointmentId(id);
		appointmentRepository.delete(appointment);
	}

	// Endpoint to update specific appointment details
	@PutMapping(value = "/updateappointment/{id}")
	public Appointment updateApointment(@PathVariable(value = "id") String id,
			@RequestBody Appointment appointmentDetails) throws Exception {
		Appointment appointment = appointmentService.findAppointmentByAppointmentId(id);
		return appointmentService.updateAppointmentDetails(appointment, appointmentDetails);
	}

	// Endpoint to update specific appointment details
	@PutMapping(value = "/updateappointment/feedbackhistory/{id}")
	public Appointment updateApointmentFeedbackHistory(@PathVariable(value = "id") String id,
			@RequestBody Appointment appointmentDetails) throws Exception {
		Appointment appointment = appointmentService.findAppointmentByAppointmentId(id);
		return appointmentService.updateAppointmentFeedbackHistory(appointment, appointmentDetails);
	}
	
	// Endpoint to update specific appointment details
	@PutMapping(value = "/updateappointment/journalhistory/{id}")
	public Appointment updateApointmentJournalHistory(@PathVariable(value = "id") String id,
			@RequestBody Appointment appointmentDetails) throws Exception {
		Appointment appointment = appointmentService.findAppointmentByAppointmentId(id);
		return appointmentService.updateAppointmentJournalHistory(appointment, appointmentDetails);
	}
	
	// Endpoint to update specific appointment history details by a doctor
	@PutMapping(value = "/updateappointment/extrainformation/doctor/{id}")
	public Appointment updateDoctorExtraInformation(@PathVariable(value = "id") String id,
			@RequestBody Appointment appointmentDetails) throws Exception {
		Appointment appointment = appointmentService.findAppointmentByAppointmentId(id);
		return appointmentService.updateDoctorExtraInformation(appointment, appointmentDetails);
	}	
	
	// Endpoint to get specific appointment history for a doctor
	@GetMapping(value = "/appointmenthistory/doctor/{id}/{journalhistory}")
	public List<Appointment> findAppointmentsByDoctorId(@PathVariable(value = "id") String id, @PathVariable(value="journalhistory") Boolean journalHistory) {
		return appointmentService.findAppointmentsByDoctorId(id, journalHistory);
	}

	// Endpoint to get specific appointment history for a patient
	@GetMapping(value = "/appointmenthistory/patient/{id}")
	public List<Appointment> findAppointmentsByPatientId(@PathVariable(value = "id") String id) {
		return appointmentService.findAppointmentsByPatientId(id);
	}

	// Endpoint to save appointment history
	@PostMapping(value = "/appointmenthistory/save/appointmenthistory")
	public Appointment saveAppointmentHistory(@RequestBody Appointment information) {
		return appointmentService.saveAppointmentHistory(information);
	}

	

	
	
	// Endpoint to update specific appointment history details by a doctor
	@PutMapping(value = "/appointmenthistory/update/appointmenthistory/doctor/{id}")
	public Appointment updateApointmentHistoryDoctor(@PathVariable(value = "id") String id,
			@RequestBody Appointment appointmentDetails) throws Exception {
		Appointment appointment = appointmentService.findAppointmentByAppointmentId(id);
		return appointmentService.updateAppointmentHistoryDetailsDoctor(appointment, appointmentDetails);
	}

	// Endpoint to update feedback appointment details by a doctor
	@PutMapping(value = "/appointmenthistory/update/appointmenthistory/patient/{id}")
	public Appointment updateApointmentHistoryPatient(@PathVariable(value = "id") String id,
			@RequestBody Appointment appointmentDetails) throws Exception {
		Appointment appointment = appointmentService.findAppointmentByAppointmentId(id);
		return appointmentService.updateAppointmentHistoryFeedbackPatient(appointment, appointmentDetails);
	}
}
