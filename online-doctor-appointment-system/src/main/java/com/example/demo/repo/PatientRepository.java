package com.example.demo.repo;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.Patient;

//@Transactional
@Repository
public interface PatientRepository extends MongoRepository<Patient, String>{


	//--------------------------------------------------------------------
	
//	Optional<Patient> findById(String id);
	List<Patient> findByPhoneNumber(String phoneNumber);
	List<Patient> findByFirstName(String firstName);
	List<Patient> findByLastName(String lastName);
	
	//--------------------------------------------------------------------
	

//	@Query("{ 'firstName' : ?0}") //NOSQL QUERY
//	List<Patient> getPatientByFirstName(@Param("firstName") String firstName);

//
	default List<Patient> getAllPatients(){
		return   StreamSupport.stream(findAll().spliterator(), false).collect(Collectors.toList());
	}
	
	
	//--------------------------------------------------------------------
	



}
