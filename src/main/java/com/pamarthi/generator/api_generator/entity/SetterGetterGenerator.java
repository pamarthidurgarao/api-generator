package com.pamarthi.generator.api_generator.entity;

import java.util.List;

import com.pamarthi.generator.api_generator.model.ColumnModel;

public class SetterGetterGenerator {

	public static String generate(List<ColumnModel> columnModels) {
		StringBuilder builder = new StringBuilder();
		StringBuilder propBuilder = new StringBuilder();

		for (ColumnModel columnModel : columnModels) {
			propBuilder.append(propertyGen(columnModel));
			builder.append(setterGen(columnModel.getType(), columnModel.getName()));
			builder.append(getterGen(columnModel.getType(), columnModel.getName()));
		}
		return propBuilder.toString() + builder.toString();
	}

	public static void main(String[] args) {
		// generate();
	}

	public static String setterGen(String type, String name) {
		return "\tpublic void set" + name.substring(0, 1).toUpperCase() + name.substring(1) + "(" + type + " " + name
				+ ") {\n\t\t" + "this." + name + " = " + name + ";\n\t}\n";
	}

	public static String getterGen(String type, String name) {
		return "\tpublic " + type + " get" + name.substring(0, 1).toUpperCase() + name.substring(1) + "() {\n\t\t"
				+ "return " + name + ";\n\t}\n";
	}

	public static String propertyGen(ColumnModel columnModel) {
		StringBuilder builder = new StringBuilder();
		if (columnModel.isPrimary()) {
			builder.append("\t@Id\n");
		}
		String column = "\"" + columnModel.getName() + "\"";
		builder.append("\t@Column(name = " + column + ", unique = " + columnModel.isUnique() + ", nullable = "
				+ !columnModel.isMandatory() + ")\n");

		builder.append("\tprivate " + columnModel.getType() + " " + columnModel.getName() + ";\n");
		return builder.toString();
	}
}
