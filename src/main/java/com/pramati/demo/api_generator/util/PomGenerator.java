package com.pramati.demo.api_generator.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

public class PomGenerator {

	public void generator(String apiName, String packageName) {
		InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("pom/pom");
		String result = new BufferedReader(new InputStreamReader(inputStream)).lines().parallel()
				.collect(Collectors.joining("\n"));
		result = Utils.replace(result, "app_name", apiName);
		result = Utils.replace(result, "package_name", packageName);
		File pomFile = new File(System.getProperty("java.io.tmpdir") + "/" + apiName + "/pom.xml");
		try {
			FileWriter writer = new FileWriter(pomFile);
			writer.write(result);
			writer.close();
		} catch (Exception e) {
		}
	}
}
