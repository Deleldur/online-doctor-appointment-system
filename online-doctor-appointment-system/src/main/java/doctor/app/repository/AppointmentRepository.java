package doctor.app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import doctor.app.models.Appointment;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String>{

	
}
