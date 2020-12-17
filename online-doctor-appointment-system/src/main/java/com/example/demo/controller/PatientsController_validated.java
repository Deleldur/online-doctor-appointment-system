package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Patient;
import com.example.demo.service.PatientService;

@RequestMapping(value = "/api/v1/patients")
@RestController
@Validated
public class PatientsController_validated {

	@Autowired
	private PatientService patientService;

	
	/*
	 
	 .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .-----------------.
	| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
	| |   _____      | || |     ____     | || |    ______    | || |    ______    | || |  _________   | || |  ________    | || |              | || |     _____    | || | ____  _____  | |
	| |  |_   _|     | || |   .'    `.   | || |  .' ___  |   | || |  .' ___  |   | || | |_   ___  |  | || | |_   ___ `.  | || |              | || |    |_   _|   | || ||_   \|_   _| | |
	| |    | |       | || |  /  .--.  \  | || | / .'   \_|   | || | / .'   \_|   | || |   | |_  \_|  | || |   | |   `. \ | || |    ______    | || |      | |     | || |  |   \ | |   | |
	| |    | |   _   | || |  | |    | |  | || | | |    ____  | || | | |    ____  | || |   |  _|  _   | || |   | |    | | | || |   |______|   | || |      | |     | || |  | |\ \| |   | |
	| |   _| |__/ |  | || |  \  `--'  /  | || | \ `.___]  _| | || | \ `.___]  _| | || |  _| |___/ |  | || |  _| |___.' / | || |              | || |     _| |_    | || | _| |_\   |_  | |
	| |  |________|  | || |   `.____.'   | || |  `._____.'   | || |  `._____.'   | || | |_________|  | || | |________.'  | || |              | || |    |_____|   | || ||_____|\____| | |
	| |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |
	| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
	 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------' 

	 */
	
	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@GetMapping(value = "/")
	public List<Patient> getAllPatients() {
		return patientService.getAllPatients();
	}
	
	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@GetMapping(value = "/getPatientByName2")
	public List<Patient> getAllPatients2(@Valid @Size(min = 1, max = 50) @RequestParam String regexp) {
		return patientService.getPatientByName2(regexp);
	}

	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@GetMapping(value = "/findPatientByName2")
	private List<Patient> findPatientByName2(@Valid @Size(min = 1, max = 50) @RequestParam String name) {
		return patientService.findPatientByName2(name);
	}

	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@RequestMapping(value = "/getPatientById", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Patient getPatientById(@Valid @Size(min = 1, max = 50) @RequestParam String id) {
		return patientService.getPatientById(id);
	}

	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@RequestMapping(value = "/getPatientById2/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Patient getPatientById2(@Valid @Size(min = 1, max = 50) @PathVariable("id") String id) {
		return patientService.getPatientById(id);
	}

	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@RequestMapping(value = "/getPatientById3/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Patient getPatientById3(@Valid @Size(min = 1, max = 50) @PathVariable("id") String id, HttpServletRequest req) {
//		req.getHeaderNames().asIterator().forEachRemaining(System.out::println);
//		req.getHeaders("user-agent").asIterator().forEachRemaining(System.out::println);
		return patientService.getPatientById(id);
	}

	
	@PreAuthorize("hasAuthority('USER') OR hasAuthority('ADMIN')")
	@GetMapping("/getAllPatients_paged")
	public ResponseEntity<Map<String, Object>> getAllPatients_paged(@RequestParam(required = false) String title,
			@Valid @Min(0) @RequestParam(defaultValue = "0") int page, @Valid @Min(0) @Max(value = 100, message = "Please provide value within range of 0 to 100") @RequestParam(defaultValue = "3") int size) {

		Pageable pageable = PageRequest.of(page, size);

		//CONVERT LIST TO PAGE
		Page<Patient> result = new PageImpl<>(patientService.getAllPatients_paged(pageable));

		Map<String, Object> response = new HashMap<>();
		response.put("result", result);
		response.put("currentPage", result.getNumber());
		response.put("totalItems", result.getTotalElements());
		response.put("totalPages", result.getTotalPages());

		return new ResponseEntity<>(response, HttpStatus.OK);

	}


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
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@PostMapping(value = "/createPatient")
	public Patient createPatient(@Valid @RequestBody Patient newPatient) {
		return patientService.createPatient(newPatient);
	}


	@PreAuthorize("hasAuthority('ADMIN')")
	@DeleteMapping(value = "/deletePatient")
	public boolean deletePatient(@Valid @Size(min = 1, max = 50) @RequestParam String id) {
		return patientService.deletePatient(id);
	}


}



