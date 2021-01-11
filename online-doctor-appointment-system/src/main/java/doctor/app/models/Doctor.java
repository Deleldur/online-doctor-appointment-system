package doctor.app.models;

import java.util.List;
import java.util.Map;

import org.springframework.data.mongodb.core.mapping.Document;

import com.example.demo.domain.User;

@Document
public class Doctor extends User{

	private List<String> ailmentList;

	public Doctor() {
		super();
	}

	public Doctor(String firstName, String lastName, Map<String, String> address, Map<String, String> roles, String phoneNumber, String email, String userName, String password, List<String> ailmentList) {
		super(firstName, lastName, address, roles, phoneNumber, email, userName, password);
		this.ailmentList = ailmentList;
	}

	public List<String> getAilmentList() {
		return ailmentList;
	}

	public void setAilmentList(List<String> ailmentList) {
		this.ailmentList = ailmentList;
	}
}
