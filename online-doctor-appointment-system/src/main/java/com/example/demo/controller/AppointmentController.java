package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Appointment;
import com.example.demo.service.AppointmentService;

@RequestMapping(value = "/appointment")
@RestController
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;
	
	@GetMapping(value="/")
	public List<Appointment> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}
}
