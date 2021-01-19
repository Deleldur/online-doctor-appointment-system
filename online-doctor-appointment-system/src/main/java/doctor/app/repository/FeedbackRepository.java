package doctor.app.repository;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import doctor.app.models.Feedback;


@Repository
public interface FeedbackRepository extends MongoRepository<Feedback, String>{
	
	
	default List<Feedback> getAllFeedback() {
		return   StreamSupport.stream(findAll().spliterator(), false).collect(Collectors.toList());
	}

}