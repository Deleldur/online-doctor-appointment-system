package com.example.demo.repo;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.domain.Feedback;


@Repository
public interface FeedbackRepository extends MongoRepository<Feedback, String>{
	
	
	default List<Feedback> getAllFeedback() {
		return   StreamSupport.stream(findAll().spliterator(), false).collect(Collectors.toList());
	}

}
