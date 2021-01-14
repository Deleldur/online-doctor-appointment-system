package doctor.app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import doctor.app.models.AppointmentHistory;

public interface AppointmentHistoryRepository extends MongoRepository<AppointmentHistory, String> {

	
}
