package doctor.app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import doctor.app.models.Ailment;



public interface AilmentRepository extends MongoRepository<Ailment, String> {

	
}
