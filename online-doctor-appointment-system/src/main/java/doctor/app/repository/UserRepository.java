package doctor.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import doctor.app.models.Doctor;
import doctor.app.models.Patient;
import doctor.app.models.User;



public interface UserRepository extends MongoRepository<User, String> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
  
  Optional<Doctor> findDoctorById(String id);
  Optional<Patient> findPatientById(String id);
	
	@Query("{ 'ailmentList' : ?0}") //NOSQL QUERY
	List<Doctor> findDoctorByAilment(@Param("ailment") String ailment);
	
	@Query("{ 'address.city' : ?0}")
	List<Doctor> findDoctorByLocation(String location);
	
	@Query("{ 'firstName': ?0, 'address.city' : ?1}")
	List<Doctor> findDoctorAndLocation(String firstName, String location);
	
//	@Query("{ 'address.city' : }")
	@Query("{ 'roles.id': ?0}")
//	@Query(value = "{}", fields ="{'roles.id' : ?0, 'address.city': 1 }")
	List<Doctor> findAllDoctorLocations(String role);
	
//


	@Query(value = "{}", fields ="{'address.city': 1 }")
    List<Doctor> findAllDistinctCity();	
	
	@Query(value = "{}", fields ="{'ailmentList': 1 }")
    List<Doctor> findAllDistinctAilment();	
}
