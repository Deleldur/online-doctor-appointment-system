package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Patient;
import com.example.demo.service.PatientService;

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



