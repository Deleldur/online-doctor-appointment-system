package doctor.app;

import org.junit.jupiter.api.*;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

import java.util.HashMap;
import java.util.Map;

import doctor.app.models.Doctor;
import doctor.app.models.Patient;
import doctor.app.models.User;


@SpringBootTest
class UserTests {

	static Map<String, String> address;


	@BeforeAll
	static void createAddress() {
		{
			address = new HashMap<>();
			address.put("streetAddress", "Murarvägen 4");
			address.put("city", "Undersåker");
			address.put("zipCode", "837 95");
		}
	}

	@Test
	void testCreateUserViaConstructor() {
		User userTest = new User("hakbjo", "hakbjo@gmail.com", "password", "Håkan", "Björk", address, "+46703237740");

		assertEquals("hakbjo", userTest.getUsername());
		assertEquals("hakbjo@gmail.com", userTest.getEmail());
		assertEquals("password", userTest.getPassword());
		assertEquals("Håkan", userTest.getFirstName());
		assertEquals("Björk", userTest.getLastName());
//		assertEquals("xxx", patientTest.getAddress());
		assertEquals("+46703237740", userTest.getPhoneNumber());

	}

	@Test
	@Disabled
	void testCreatePatientViaConstructor() {
		Patient patientTest = new Patient("Håkan", "Björk", address, "+46703237740", "hakbjo@gmail.com", true);

//		patientTest.setFirstName("Håkan");
//		assertEquals("Håkan", patientTest.getFirstName());

//		patientTest.setLastName("Björk");
//		assertEquals("Björk", patientTest.getLastName());

//		patientTest.setStreetAddress("Murarvägen 4");
//		assertEquals("Murarvägen 4", patientTest.getStreetAddress());

//		patientTest.setZipCode("83795");
//		assertEquals("83795", patientTest.getZipCode());

//		patientTest.setCity("Undersåker");
//		assertEquals("Undersåker", patientTest.getCity());

//		GETADDRESS
//		assertEquals("xxx", patientTest.getAddress());

//		patientTest.setPhoneNumber("+46703237740");
//		assertEquals("+46703237740", patientTest.getPhoneNumber());

//		patientTest.setEmail("hakbjo@gmail.com");
//		assertEquals("hakbjo@gmail.com", patientTest.getEmail());

//		patientTest.setVerified(true);
//		assertEquals(true, patientTest.isVerified());
		
		assertAll(
			() -> assertEquals("Håkan", patientTest.getFirstName()),
			() -> assertEquals("Björk", patientTest.getLastName()),
			() -> assertEquals("Murarvägen 4", patientTest.getStreetAddress()),
			() -> assertEquals("83795", patientTest.getZipCode()),
			() -> assertEquals("Undersåker", patientTest.getCity()),
	//		() -> assertEquals("xxx", patientTest.getAddress()),
			() -> assertEquals("+46703237740", patientTest.getPhoneNumber()),
			() -> assertEquals("hakbjo@gmail.com", patientTest.getEmail()),
			() -> assertEquals(true, patientTest.isVerified())
		);
	}

	@Test
	void testCreateDoctorViaConstructor() {
		Doctor doctorTest = new Doctor();

		doctorTest.setFirstName("Håkan");
		assertEquals("Håkan", doctorTest.getFirstName());

		doctorTest.setLastName("Björk");
		assertEquals("Björk", doctorTest.getLastName());
		
		doctorTest.setStreetAddress("Murarvägen 4");
		assertEquals("Murarvägen 4", doctorTest.getStreetAddress());

		doctorTest.setZipCode("83795");
		assertEquals("83795", doctorTest.getZipCode());

		doctorTest.setCity("Undersåker");
		assertEquals("Undersåker", doctorTest.getCity());

		doctorTest.setPhoneNumber("+46703237740");
		assertEquals("+46703237740", doctorTest.getPhoneNumber());

		doctorTest.setEmail("hakbjo@gmail.com");
		assertEquals("hakbjo@gmail.com", doctorTest.getEmail());

//		KOLLA UPP AILMENTLIST FORMAT/INPUT…
//		doctorTest.setAilmentList();
//		assertEquals("", doctorTest.getAilmentList());
	}

}
