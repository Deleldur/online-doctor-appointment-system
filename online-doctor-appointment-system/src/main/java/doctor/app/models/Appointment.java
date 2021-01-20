package doctor.app.models;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "appointment")
public class Appointment {

	@Id
	private String id;
	@NotNull
	private String doctorId;
	@NotNull
	private String patientId;
	private Boolean active; //  set to false if the meeting is "done" or cancelled
	private String bookingDate; // String is a placeholder until joda-time or LocalDateTime is chosen to be used
//	private String bookingTime; // might not be needed if date and time is baked in to one field
	private String bookingStartTime;
	private String bookingEndTime;
	
	public Appointment() {
		
	}
	
	

	public Appointment(String doctorId, String patientId, Boolean active, String bookingDate, String bookingStartTime, String bookingEndTime) {
		super();
		this.doctorId = doctorId;
		this.patientId = patientId;
		this.active = active;
		this.bookingDate = bookingDate;
		this.bookingStartTime = bookingStartTime;
		this.bookingEndTime = bookingEndTime;

	}



	public String getId() {
		return id;
	}




	public String getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(String doctorId) {
		this.doctorId = doctorId;
	}

	public String getPatientId() {
		return patientId;
	}

	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public String getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}



	public String getBookingStartTime() {
		return bookingStartTime;
	}



	public void setBookingStartTime(String bookingStartTime) {
		this.bookingStartTime = bookingStartTime;
	}



	public String getBookingEndTime() {
		return bookingEndTime;
	}



	public void setBookingEndTime(String bookingEndTime) {
		this.bookingEndTime = bookingEndTime;
	}

	
	
}
