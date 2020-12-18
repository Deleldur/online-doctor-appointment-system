package com.example.demo;

import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.example.demo.domain.Patient;
import com.example.demo.domain.User;
import com.example.demo.repo.PatientRepository;
import com.github.lalyos.jfiglet.FigletFont;

@EnableScheduling
@SpringBootApplication
public class App {

	private static final Logger log = LoggerFactory.getLogger(App.class);

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);

	}

	@Bean
	public CommandLineRunner demo(PatientRepository repository) {

		return (args) -> {

			log.info("bean was executed!");

			// DELETE ALL
			repository.deleteAll();

			// SAVE USER
//			Patient patient1 = new Patient().setFirstName("Mikael").setLastName("Sten").setAddress("Östersund").setPhoneNumber("555-555-5555").setVerified(true);
//			Patient patient2 = new Patient().setFirstName("Anders").setLastName("Nilsson").setAddress("Mora").setPhoneNumber("555-666-5555").setVerified(true);


			Patient patient1 = new Patient("Mikael", "Sten", "Östersund", "555-555-5555", true);
			Patient patient2 = new Patient("Anders", "Nilsson", "Mora", "111-111-1111", true);
			repository.save(patient1);
			repository.save(patient2);

			
			// GET ALL PATIENTS
			int counter = 0;
			for (Patient patient : repository.getAllPatients()) {
				++counter;
				log.info(counter + ". " + patient);
			}

			// FIND USER BY ID
			try {
				List<Patient> findPhoneNumber = repository.findByPhoneNumber("555-555-5555");
				List<Patient> findByFirstName = repository.findByFirstName("Mikael");
//				log.info("user: {}", patient);
				System.out.println("First phone number: " + findPhoneNumber);
				System.out.println("find first name: " + findByFirstName);

			} catch (Exception e) {
				e.printStackTrace();
			}
		};
		
		
	}
}
