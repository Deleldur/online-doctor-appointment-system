package doctor.app.models;

import java.util.List;
import java.util.Map;

public class Doctor extends User{

	private List<String> ailmentList;

	public Doctor() {
		super();
	}

	public Doctor(String username, String email, String password, String firstName, String lastName, Map<String, String> address, String phoneNumber, List<String> ailmentList) {
		super(username, email, password, firstName, lastName, address, phoneNumber);
		this.ailmentList = ailmentList;
	}

	public List<String> getAilmentList() {
		return ailmentList;
	}

	public void setAilmentList(List<String> ailmentList) {
		this.ailmentList = ailmentList;
	}
}
