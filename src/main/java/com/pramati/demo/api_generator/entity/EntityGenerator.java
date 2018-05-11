package com.pramati.demo.api_generator.entity;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Map;
import java.util.stream.Collectors;

import com.pramati.demo.api_generator.util.ClassGenerator;
import com.pramati.demo.api_generator.util.ProjectStructureGenerator;
import com.pramati.demo.api_generator.util.Utils;

public class EntityGenerator {

	public void generate(Map<String, String> props) {
		String path = ProjectStructureGenerator.packageGenerator("api", "com.app.doit" + "/" + "User");
		InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("entity/entity");
		String result = new BufferedReader(new InputStreamReader(inputStream)).lines().parallel()
				.collect(Collectors.joining("\n"));
		for (Map.Entry<String, String> entry : props.entrySet()) {
			result = Utils.replace(result, entry.getKey(), entry.getValue());
		}
		ClassGenerator.generate(path + "/User.java", result);
		System.out.println(result);

	}

}
