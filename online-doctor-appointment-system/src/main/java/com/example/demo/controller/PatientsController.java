package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Patient;
import com.example.demo.service.PatientService;

@RequestMapping(value = "/api/v1/patient")
@RestController
public class PatientsController {

	@Autowired
	private PatientService patientService;

	


	/*
	.----------------.  .----------------.  .----------------.  .----------------.  .-----------------.
	| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
	| |      __      | || |  ________    | || | ____    ____ | || |     _____    | || | ____  _____  | |
	| |     /  \     | || | |_   ___ `.  | || ||_   \  /   _|| || |    |_   _|   | || ||_   \|_   _| | |
	| |    / /\ \    | || |   | |   `. \ | || |  |   \/   |  | || |      | |     | || |  |   \ | |   | |
	| |   / ____ \   | || |   | |    | | | || |  | |\  /| |  | || |      | |     | || |  | |\ \| |   | |
	| | _/ /    \ \_ | || |  _| |___.' / | || | _| |_\/_| |_ | || |     _| |_    | || | _| |_\   |_  | |
	| ||____|  |____|| || | |________.'  | || ||_____||_____|| || |    |_____|   | || ||_____|\____| | |
	| |              | || |              | || |              | || |              | || |              | |
	| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
	'----------------'  '----------------'  '----------------'  '----------------'  '----------------' 
	*/
	
//
//	@PreAuthorize("hasAuthority('ADMIN')")
//	@PutMapping(value = "/updatePatient")
//	public Patient updatePatient(@RequestBody Patient userUpdate) {
//		return PatientService.updatePatient(userUpdate);
//	}



}



