package doctor.app.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import doctor.app.models.Appointment;


@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String>{

	@Query("{ 'patientId' : ?0}") //NOSQL QUERY
	List<Appointment> findByPatientId(@Param("id") String id);
	@Query("{ 'doctorId' : ?0}") //NOSQL QUERY
	List<Appointment> findByDoctorId(@Param("id") String id);
	
}
