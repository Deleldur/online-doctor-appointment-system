package com.example.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.domain.Doctor;

public interface DoctorRepository extends MongoRepository<Doctor, String>{

}
