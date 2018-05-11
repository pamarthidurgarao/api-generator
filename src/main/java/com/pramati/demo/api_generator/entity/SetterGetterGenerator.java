package com.pramati.demo.api_generator.entity;

import java.util.HashMap;
import java.util.Map;

public class SetterGetterGenerator {

	public static Map<String, String> map = new HashMap<String, String>();

	public static String generate() {
		map.put("name", "String");
		map.put("age", "Integer");
		map.put("dob", "Date");
		map.put("gender", "String");
		StringBuilder builder = new StringBuilder();
		StringBuilder propBuilder = new StringBuilder();
		map.forEach((k, v) -> {
			propBuilder.append(propertyGen(v, k));
			builder.append(setterGen(v, k));
			builder.append(getterGen(v, k));
		});
		return propBuilder.toString() + builder.toString();
	}

	public static void main(String[] args) {
		generate();
	}

	public static String setterGen(String type, String name) {
		return "\tpublic void set" + name.substring(0, 1).toUpperCase() + name.substring(1) + "(" + type + " " + name
				+ ") {\n\t\t" + "this." + name + " = " + name + ";\n\t}\n";
	}

	public static String getterGen(String type, String name) {
		return "\tpublic " + type + " get" + name.substring(0, 1).toUpperCase() + name.substring(1) + "() {\n\t\t"
				+ "return " + name + ";\n\t}\n";
	}

	public static String propertyGen(String type, String name) {
		return "\tprivate " + type + " " + name + ";\n";
	}
}
