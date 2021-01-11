package doctor.app.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import doctor.app.models.ERole;
import doctor.app.models.Role;



public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
