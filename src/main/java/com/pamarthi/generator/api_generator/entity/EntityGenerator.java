package com.pamarthi.generator.api_generator.entity;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import com.pamarthi.generator.api_generator.model.EntityModel;
import com.pamarthi.generator.api_generator.util.Utils;

public class EntityGenerator {

	public void generate(String packageName, String appName, EntityModel entityModel) {
		String entity = entityModel.getName();
		String path = ProjectStructureGenerator.packageGenerator(appName, packageName + "." + entity);
		InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("entity/entity");
		String result = new BufferedReader(new InputStreamReader(inputStream)).lines().parallel()
				.collect(Collectors.joining("\n"));
		String className = entity.substring(0, 1).toUpperCase() + entity.substring(1);
		result = Utils.replace(result, "package_name", packageName);
		result = Utils.replace(result, "table_name", entity.toLowerCase());
		result = Utils.replace(result, "class_name", className);
		result = Utils.replace(result, "entity_var", entity.toLowerCase());
		result = Utils.replace(result, "getters_setters", SetterGetterGenerator.generate(entityModel.getColumns()));

		ClassGenerator.generate(path + "/" + className + ".java", result);

	}

}
