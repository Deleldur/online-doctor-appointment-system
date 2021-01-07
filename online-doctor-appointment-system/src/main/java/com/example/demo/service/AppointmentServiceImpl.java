package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Appointment;
import com.example.demo.repo.AppointmentRepository;

@Service
public class AppointmentServiceImpl implements AppointmentService {


	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Override
	public List<Appointment> getAllAppointments() {
		return appointmentRepository.findAll();
	}

}
