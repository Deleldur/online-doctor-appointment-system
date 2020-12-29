package com.example.demo.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Doctor;
import com.example.demo.service.DoctorService;

@RequestMapping(value = "/doctor")
@RestController
@Validated
public class DoctorController {

	@Autowired
	private DoctorService doctorService;

	
	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@GetMapping(value = "/")
	public List<Doctor> getAllDoctors() {
		return doctorService.getAllDoctors();
	}
	
	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@PostMapping(value="/ailment")
	public List<Doctor> getDoctorsWithAilmentSpeciality(String ailment) {
		return doctorService.findDoctorByAilment(ailment);
	}
	
	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@GetMapping(value = "/test")
	public String test() {
		return "test";
	}


}



