package doctor.app;


import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import doctor.app.models.Feedback;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("USER CONTROLLER TESTS")
class UserControllersTest extends DummyDataForTest {

	@Test
	@DisplayName("Console log all data used in the tests")
	@Disabled
	void echoTestData() {
//		System.out.println("DATA USED IN TEST: ");
//		System.out.println("         doctorId: " + useDoctorId);
//		System.out.println("        patientId: " + usePatientId);
//		System.out.println("    appointmentId: " + useAppointmentId);
//		System.out.println("  feedbackMessage: " + useFeedbackMessage);
	}

	
	@Test
	@DisplayName("Create feedback on an appointment")
	void createFeedbackOnAnAppointmentViaClassConstructor() {
		Feedback feedbackTest = new Feedback(useDoctorId, usePatientId, useAppointmentId, useFeedbackMessage);
//		System.out.println("DATA USED IN TEST: " + useDoctorId + " : " + usePatientId + " : " + useAppointmentId + " : " + useFeedbackMessage);
		assertAll(
			() -> assertEquals(useDoctorId, feedbackTest.getDoctorId()),
			() -> assertEquals(usePatientId, feedbackTest.getPatientId()),
			() -> assertEquals(useAppointmentId, feedbackTest.getAppointmentId()),
			() -> assertEquals(useFeedbackMessage, feedbackTest.getFeedbackMessage())
		);
	}

}
