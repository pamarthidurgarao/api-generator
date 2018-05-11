package com.pramati.demo.api_generator.controller;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import com.pramati.demo.api_generator.util.ClassGenerator;
import com.pramati.demo.api_generator.util.ProjectStructureGenerator;
import com.pramati.demo.api_generator.util.Utils;

public class RepositoryGenerator {

	public void generator() {
		String className = "user";
		String path = ProjectStructureGenerator.packageGenerator("api", "com.app.doit" + "/" + "User");
		InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("repository/repository");
		String result = new BufferedReader(new InputStreamReader(inputStream)).lines().parallel()
				.collect(Collectors.joining("\n"));
		result = Utils.replace(result, "package_name", "com.app.doit.user");
		result = Utils.replace(result, "entity_var", className.toLowerCase());
		result = Utils.replace(result, "entity_name", className.substring(0, 1).toUpperCase() + className.substring(1));
		ClassGenerator.generate(path + "/UserRepository.java", result);
	}
}
