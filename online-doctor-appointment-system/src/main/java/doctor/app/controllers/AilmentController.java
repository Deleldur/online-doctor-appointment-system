package doctor.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import doctor.app.models.Ailment;
import doctor.app.repository.AilmentRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/api")
@RestController
public class AilmentController {

	@Autowired
	AilmentRepository ailmentRepository;
	
	@GetMapping(value="/ailments")
	public List<Ailment> getAllAilments() {
		return ailmentRepository.findAll();
	}
}
