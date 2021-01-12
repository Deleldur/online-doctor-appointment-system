package doctor.app.models;

import java.util.Date;
import java.util.Map;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.demo.domain.User;

//@Document
public class Patient extends User {	

	private boolean verified;
	private Date appointment;
	public Patient() {
		super();
	}
	

	public Patient(String firstName, String lastName, Map<String, String> address, String phoneNumber, String email, 
			boolean verified) {
		super(firstName, lastName, address, phoneNumber, email);
		this.verified = verified;
	}


	public boolean isVerified() {
		return verified;
	}


	public Date getAppointment() {
		return appointment;
	}


	public void setAppointment(Date appointment) {
		this.appointment = appointment;
	}


	public void setVerified(boolean verified) {
		this.verified = verified;
	}

}