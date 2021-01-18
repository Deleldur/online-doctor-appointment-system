package doctor.app.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import doctor.app.models.AppointmentHistory;

public interface AppointmentHistoryRepository extends MongoRepository<AppointmentHistory, String> {

	@Query("{ 'doctorId' : ?0}") //NOSQL QUERY
	List<AppointmentHistory> findAppointmentsByDoctorId(@Param("id") String id);
	
	@Query("{ 'patientId' : ?0}") //NOSQL QUERY
	List<AppointmentHistory> findAppointmentsByPatientId(@Param("id") String id);
}
