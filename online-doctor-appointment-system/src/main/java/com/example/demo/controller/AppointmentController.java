package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Appointment;
import com.example.demo.repo.AppointmentRepository;
import com.example.demo.service.AppointmentService;

@RequestMapping(value = "/appointment")
@CrossOrigin(origins = {"http://localhost:8080"})
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
	
	@PostMapping(value="/create")
	public Appointment createAppointment(@RequestBody Appointment appointmentDetails) {
		
		return appointmentRepository.save(appointmentDetails);
	}
}
