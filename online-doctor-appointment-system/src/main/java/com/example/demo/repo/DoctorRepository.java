package com.example.demo.repo;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.domain.Doctor;

@Repository
public interface DoctorRepository extends MongoRepository<Doctor, String>{
	
	
	default List<Doctor> getAllDoctors() {
		return   StreamSupport.stream(findAll().spliterator(), false).collect(Collectors.toList());
	}
	
	@Query("{ 'ailmentList' : ?0}") //NOSQL QUERY
	List<Doctor> findDoctorByAilment(@Param("ailment") String ailment);
}
