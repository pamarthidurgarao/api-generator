package com.pamarthi.generator.api_generator.entity;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import com.pamarthi.generator.api_generator.util.Utils;

public class SecurityConfigGenerator {

	public void generator(String packageName, String appName) {
		String path = ProjectStructureGenerator.packageGenerator(appName, packageName + "/" + "config");
		InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("config/springSecConfig");
		String result = new BufferedReader(new InputStreamReader(inputStream)).lines().parallel()
				.collect(Collectors.joining("\n"));
		result = Utils.replace(result, "package_name", packageName);

		ClassGenerator.generate(path + "/SecurityConfig.java", result);
	}
}
