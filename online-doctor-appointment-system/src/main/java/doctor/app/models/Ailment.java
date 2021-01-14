package doctor.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ailments")
public class Ailment {

	@Id
	private String id;
	
	private String ailment;
	
	public Ailment() {
		
	}
	
	public Ailment(String ailment) {
		this.ailment = ailment; 
	}

	public String getId() {
		return id;
	}

	public String getAilment() {
		return ailment;
	}

	public void setAilment(String ailment) {
		this.ailment = ailment;
	}
	
	
}
