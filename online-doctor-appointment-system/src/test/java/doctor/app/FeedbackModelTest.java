package doctor.app;


import org.junit.jupiter.api.*;
import org.springframework.boot.test.context.SpringBootTest;

import doctor.app.models.Feedback;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@DisplayName("FEEDBACK MODEL TESTS")
class FeedbackModelTest extends DummyDataForTest {

	@Test
	@DisplayName("Console log all data used in the tests")
	@Disabled
	void echoTestData() {
		System.out.println("DATA USED IN TEST: ");
		System.out.println("         doctorId: " + useDoctorId);
		System.out.println("        patientId: " + usePatientId);
		System.out.println("    appointmentId: " + useAppointmentId);
		System.out.println("  feedbackMessage: " + useFeedbackMessage);
	}

	
	@Test
	@DisplayName("Create feedback on an appointment via the business logic")
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
