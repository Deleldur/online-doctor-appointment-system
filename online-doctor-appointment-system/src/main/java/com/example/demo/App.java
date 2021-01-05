package com.example.demo;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.example.demo.domain.Appointment;
import com.example.demo.domain.Doctor;
import com.example.demo.domain.Patient;
import com.example.demo.domain.Feedback;
import com.example.demo.repo.AppointmentRepository;
import com.example.demo.repo.DoctorRepository;
import com.example.demo.repo.FeedbackRepository;
import com.example.demo.repo.PatientRepository;

@EnableScheduling
@SpringBootApplication
public class App {

	private static final Logger log = LoggerFactory.getLogger(App.class);
	
	// Hard coded address fields
	public static Map<String, String> address1;
	static {
	    address1 = new HashMap<>();
	    address1.put("streetAddress", "Hammarvägen 12");
	    address1.put("city", "Östersund");
	    address1.put("zipCode", "831 35");
	}

	public static Map<String, String> address2;
	static {
	    address2 = new HashMap<>();
	    address2.put("streetAddress", "Backegatan 22");
	    address2.put("city", "Sundsvall");
	    address2.put("zipCode", "835 55");
	} 

	 
	// Hard coded feedback fields from patient -> doctor
	public static Map<String, String> feedback1;
	static {
		feedback1 = new HashMap<>();
		feedback1.put("feedback", "This is my feedback for doctor 1");
		feedback1.put("doctorId", "unique doctor ID");
	}

	public static Map<String, String> feedback2;
	static {
		feedback2 = new HashMap<>();
		feedback2.put("feedback", "This is my feedback for doctor 2");
		feedback2.put("doctorId", "unique doctor ID");
	}

	
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);

	}

	@Bean CommandLineRunner doctorDemo(DoctorRepository doctorRepository) {
		return (args) -> {
			
			doctorRepository.deleteAll();
			Doctor doctor1 = new Doctor("Tommy", "Hansen", address1, "888-888-8888", "doctor@doctor.com", Arrays.asList("acne", 
																														"allergies"));
			Doctor doctor2 = new Doctor("Marie", "Larsson", address2, "888-888-9999", "marie@doctor.com", Arrays.asList("acne",
																														"diabetes", 
																														"hearing"));
			doctorRepository.save(doctor1);
			doctorRepository.save(doctor2);
			
			int counter = 0;
			for (Doctor doctor: doctorRepository.getAllDoctors()) {
				++counter;
				log.info(counter + ". doctor: " + doctor);
			}
		};
	}
	
	@Bean
	public CommandLineRunner patientDemo(PatientRepository patientRepository) {

		return (args) -> {

			log.info("bean was executed!");

			// DELETE ALL
			patientRepository.deleteAll();

			// SAVE USER
			Patient patient1 = new Patient("Mikael", "Sten", address1, "555-555-5555", "test@test.com", true);
			Patient patient2 = new Patient("Bosse", "Nilsson", address2, "555-555-4444", "test2@test.com", true);
			Patient patient3 = new Patient("Klasse", "Boström", address1, "555-555-5123", "test3@test.com", true);

			patientRepository.save(patient1);
			patientRepository.save(patient2);
			patientRepository.save(patient3);

			// GET ALL PATIENTS
			int counter = 0;
			for (Patient patient : patientRepository.getAllPatients()) {
				++counter;
				log.info(counter + ". patient: " + patient);
			}

			// FIND USER BY ID
			try {
				List<Patient> findPhoneNumber = patientRepository.findByPhoneNumber("555-555-5555");
				List<Patient> findByFirstName = patientRepository.findByFirstName("Mikael");
//				log.info("user: {}", patient);
				System.out.println("First phone number: " + findPhoneNumber);
				System.out.println("find first name: " + findByFirstName);

			} catch (Exception e) {
				e.printStackTrace();
			}
		};
	}
	
//	@Bean
//	public CommandLineRunner feedbackDemo(FeedbackRepository feedbackRepository) {
//		
//		// String doctorId, String patientId, String appointmentId, String feedbackMessage
//		return (args) -> {
//			
//			feedbackRepository.deleteAll();
//			Feedback feedback = new Feedback("doctor Id", "patient Id", "Appointment Id", "Feedback message");
//			feedbackRepository.save(feedback);
//		};
//	}
	
	@Bean
	public CommandLineRunner appointmentDummy(AppointmentRepository appointmentRepository) {
		return (args) -> {
			appointmentRepository.deleteAll();
//			String doctorId, String patientId, Boolean active, String bookingDate, String bookingTime
			Appointment appointment = new Appointment("DoctorID", "PatientID", true, "2020-12-31", "23:30");
			Appointment appointment2 = new Appointment("1234", "f123124", true, "2021-03-15", "12:30");
			appointmentRepository.save(appointment);
			appointmentRepository.save(appointment2);
		};
	}
}
