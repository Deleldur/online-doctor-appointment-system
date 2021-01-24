package doctor.app.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import doctor.app.models.Appointment;
import doctor.app.models.AppointmentHistory;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String>{

	@Query("{ 'patientInformation.patientId' : ?0}") //NOSQL QUERY
	List<Appointment> findByPatientId(@Param("id") String id);
	
	@Query("{ 'doctorInformation.doctorId' : ?0}") //NOSQL QUERY
	List<Appointment> findByDoctorId(@Param("id") String id);
	@Query("{ 'id' : ?0}") //NOSQL QUERY
	Appointment findAppointmentById(@Param("id") String id);
	
	@Query("{ 'doctorInformation.doctorId' : ?0}") //NOSQL QUERY
	List<Appointment> deleteAppointment(@Param("id") String id);
	@Query("{ 'doctorInformation.doctorId' : ?0}") //NOSQL QUERY
	List<Appointment> findAppointmentsByDoctorId(@Param("id") String id);
	
	@Query("{ 'patientInformation.patientId' : ?0}") //NOSQL QUERY
	List<Appointment> findAppointmentsByPatientId(@Param("id") String id);
	


	
}
