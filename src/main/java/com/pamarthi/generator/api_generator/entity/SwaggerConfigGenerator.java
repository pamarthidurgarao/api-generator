package com.pamarthi.generator.api_generator.entity;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import com.pamarthi.generator.api_generator.util.Utils;

public class SwaggerConfigGenerator {

	public void generator(String apiName, String packageName) {
		String path = ProjectStructureGenerator.packageGenerator(apiName, packageName + "/" + "config");
		InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("config/swaggerConfig");
		String result = new BufferedReader(new InputStreamReader(inputStream)).lines().parallel()
				.collect(Collectors.joining("\n"));
		result = Utils.replace(result, "app_name", apiName);
		result = Utils.replace(result, "package_name", packageName);

		ClassGenerator.generate(path + "/SwaggerConfig.java", result);
	}
}
