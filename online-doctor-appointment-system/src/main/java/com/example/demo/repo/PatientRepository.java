package com.example.demo.repo;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.Patient;

//@Transactional
@Repository
public interface PatientRepository extends MongoRepository<Patient, String>{


	//--------------------------------------------------------------------
	
	Optional<Patient> findById(String id);
	List<Patient> findByName(String name);

	Page<Patient> findById(String id, Pageable pageable);
	List<Patient> findByName(String name, Sort sort);

	
	//--------------------------------------------------------------------
	
	Page<Patient> findByIdContaining(String id, Pageable pageable);
	List<Patient> findByNameContaining(String name, Sort sort);

	Page<Patient> findByIdContainingIgnoreCase(String id, Pageable pageable);
	List<Patient> findByNameContainingIgnoreCase(String name, Sort sort);

	Page<Patient> findByIdLike(String id, Pageable pageable);
	List<Patient> findByNameLike(String name, Sort sort);

	List<Patient> findByNameStartingWith(String name);
	List<Patient> findByNameEndingWith(String name);
	
	Page<Patient> findByIdStartingWith(String id, Pageable pageable);
	List<Patient> findByNameEndingWith(String name, Sort sort);

	Page<Patient> findByIdLikeOrNameLike(String id, String name, Pageable pageable);
	List<Patient> findByIdLikeAndNameLike(String id, String name, Sort sort);
	List<Patient> findByNameLikeOrderByPriceAsc(String name);

	List<Patient> findByPriceGreaterThan(double price);
	List<Patient> findByPriceLessThan(double price);
	List<Patient> findByPriceBetween(double from, double to);

	List<Patient> findByVerifiedIsTrue();
	List<Patient> findByVerifiedIsFalse();

	List<Patient> findByExpiryDateAfter(Date date);
	List<Patient> findByExpiryDateBefore(Date date);
	List<Patient> findByExpiryDateBeforeOrderByPrice(Date date);
	
	boolean existsByName(String name);
	boolean existsByPrice(double price);
	
	//--------------------------------------------------------------------
	
	//@Query("SELECT u FROM Product u WHERE u.name = :name") //SQL QUERY
	@Query("{ 'name' : ?0}") //NOSQL QUERY
	List<Patient> getPatientByName(@Param("name") String name);

	@Query(value = "{ 'name' : ?0}", sort = "{price: -1}" ) //NOSQL QUERY
	List<Patient> getPatientByName_sort(@Param("name") String name);

	@Query("{ 'name' : ?0}") //NOSQL QUERY
	List<Patient> getPatientByName_page(@Param("name") String name);

	@Query("{ 'name' : ?0}, { 'price' : ?1}") //NOSQL QUERY
	List<Patient> getPatientByNameAndPrice_page(@Param("name") String name, @Param("price") double price);

	@Query("{ 'name' : ?0}, { 'friends.name' : ?1}") //NOSQL QUERY
	List<Patient> getPatientByNameAndPrice_otherNestedFields(@Param("name") String name, @Param("field") String field);

	@Query("{ 'name' : {$regex: '^?0'}}") //NOSQL QUERY
	List<Patient> getPatientByName_regex(@Param("name") String name);

	@Query("{ 'name' : { $regex: ?0 } }") //NOSQL QUERY
	List<Patient> findPatientsByName_Regex(String regex);
	
	@Query("{ 'price' : { $gt: ?0, $lt: ?1 } }")
	List<Patient> findPatientsByPriceBetween(double startPrice, double endPrice);
	
	//--------------------------------------------------------------------
	
	default List<Patient> findAll_paged(Pageable pageable) {
		return StreamSupport.stream(findAll(pageable).spliterator(), false).collect(Collectors.toList());
	}

	default List<Patient> getAllPatients(){
		return   StreamSupport.stream(findAll().spliterator(), false).collect(Collectors.toList());
	}
	
	
	//--------------------------------------------------------------------
	



}
