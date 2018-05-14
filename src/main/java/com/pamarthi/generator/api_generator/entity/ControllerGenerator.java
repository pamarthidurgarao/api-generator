package com.pamarthi.generator.api_generator.entity;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import com.pamarthi.generator.api_generator.util.Utils;

public class ControllerGenerator {

	public void generator(String packageName, String appName, String entity) {
		String path = ProjectStructureGenerator.packageGenerator(appName, packageName + "." + entity);
		InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("controller/controller");
		String result = new BufferedReader(new InputStreamReader(inputStream)).lines().parallel()
				.collect(Collectors.joining("\n"));
		result = Utils.replace(result, "package_name", packageName);
		result = Utils.replace(result, "entity_var", entity.toLowerCase());
		String className = entity.substring(0, 1).toUpperCase() + entity.substring(1);
		result = Utils.replace(result, "entity_name", className);
		ClassGenerator.generate(path + "/" + className + "Controller.java", result);
	}
}
