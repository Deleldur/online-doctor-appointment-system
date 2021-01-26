package doctor.app;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.*;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
public class AppointmentTests {

	static Map<String, String> doctorInfo;
	static Map<String, String> patientInfo;
	
	@BeforeAll
	static void createDoctorInfo() {
		{
			doctorInfo = new HashMap<>();
			doctorInfo.put(null, null);
		}
	}


	@Test
	void testCreateAppointmentViaConstructor() {
		
		
	}

}
