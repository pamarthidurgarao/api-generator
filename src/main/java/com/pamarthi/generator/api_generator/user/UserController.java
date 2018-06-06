package com.pamarthi.generator.api_generator.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

	private static final Logger LOG = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;

	@PostMapping("/saveOrUpdate")
	@ResponseBody
	public UserResponse save(@RequestBody User user) {
		LOG.info("save or update called on user");
		UserResponse response = new UserResponse();
		response.setUser(userService.save(user));
		return response;
	}

	@GetMapping("/getAll")
	@ResponseBody
	public UserResponse get() {
		LOG.info("getAll called on user");
		UserResponse response = new UserResponse();
		response.setUsers(userService.getAll());
		return response;
	}

	@GetMapping("/findByMail")
	@ResponseBody
	public UserResponse getByMail(@RequestParam String email) {
		LOG.info("findByMail called on user");
		UserResponse response = new UserResponse();
		response.setUser(userService.findByEmail(email));
		return response;
	}

}
