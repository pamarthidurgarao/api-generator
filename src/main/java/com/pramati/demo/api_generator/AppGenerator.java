package com.pramati.demo.api_generator;

import java.util.HashMap;
import java.util.Map;

import com.pramati.demo.api_generator.controller.ControllerGenerator;
import com.pramati.demo.api_generator.controller.RepositoryGenerator;
import com.pramati.demo.api_generator.controller.ServiceGenerator;
import com.pramati.demo.api_generator.entity.EntityGenerator;
import com.pramati.demo.api_generator.entity.SetterGetterGenerator;
import com.pramati.demo.api_generator.util.PomGenerator;
import com.pramati.demo.api_generator.util.ProjectStructureGenerator;

public class AppGenerator {

	private static Map<String, String> props = new HashMap<String, String>();

	public void generate() {
		ProjectStructureGenerator.generator("api");
		PomGenerator pomGenerator = new PomGenerator();
		pomGenerator.generator("api", "com.apps.doit");
		EntityGenerator entityGenerator = new EntityGenerator();
		entityGenerator.generate(props);
		RepositoryGenerator repositoryGenerator = new RepositoryGenerator();
		repositoryGenerator.generator();
		ServiceGenerator serviceGenerator = new ServiceGenerator();
		serviceGenerator.generatorSerivce();
		serviceGenerator.generatorSerivceImpl();
		ControllerGenerator controllerGenerator = new ControllerGenerator();
		controllerGenerator.generator();
	}

	public static void main(String[] args) {
		AppGenerator generator = new AppGenerator();
		prop();
		generator.generate();
	}

	public static Map<String, String> prop() {
		props.put("package_name", "com.app.doit.user");
		props.put("table_name", "User");
		props.put("class_name", "User");
		props.put("getters_setters", SetterGetterGenerator.generate());
		return props;
	}
}
