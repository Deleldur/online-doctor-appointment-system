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
			Patient user1 = new Patient().setFirstName("Mikael").setLastName("Sten").setAddress("Östersund")
					.setVerified(true).setPhoneNumber("0707-397535");
			Patient user2 = new Patient().setFirstName("Anders").setLastName("Nilsson").setAddress("Hammarby")
					.setVerified(true).setPhoneNumber("555-564-5645");
			repository.save(user1);
			repository.save(user2);

			// GET ALL PATIENTS
			int counter = 0;
			for (Patient patient : repository.getAllPatients()) {
				++counter;
				log.info(counter + ". " + patient);
			}

			// FIND USER BY ID
			try {
				List<Patient> findPhoneNumber = repository.findByPhoneNumber("555-564-5645");
				List<Patient> find = repository.findByFirstName("555-564-5645");
//				log.info("user: {}", patient);
				System.out.println("First name: " + findPhoneNumber);

			} catch (Exception e) {
				e.printStackTrace();
			}
		};
		
		
	}
}
