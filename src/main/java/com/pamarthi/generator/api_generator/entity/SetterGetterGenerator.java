package com.pamarthi.generator.api_generator.entity;

import java.util.HashMap;
import java.util.Map;

import com.pamarthi.generator.api_generator.model.ColumnModel;
import com.pamarthi.generator.api_generator.model.EntityModel;
import com.pamarthi.generator.api_generator.model.RelationType;

public class SetterGetterGenerator {

	public static StringBuilder packageBuilder = new StringBuilder();

	public static Map<String, String> generate(EntityModel entityModel, String packageName) {
		Map<String, String> data = new HashMap<>();
		packageBuilder = new StringBuilder();
		StringBuilder builder = new StringBuilder();
		StringBuilder propBuilder = new StringBuilder();

		for (ColumnModel columnModel : entityModel.getColumns()) {
			propBuilder.append(propertyGen(columnModel, entityModel.getName(), packageName));
			if (columnModel.getRelation() != null && columnModel.getRelation().getColumnName() != null) {
				String tableName = columnModel.getRelation().getTableName();
				tableName = tableName.substring(0, 1).toUpperCase() + tableName.substring(1);
				if (RelationType.MANYTOONE == columnModel.getRelation().getRelationType()) {
					builder.append(setterGen(tableName, columnModel.getName()));
					builder.append(getterGen(tableName, columnModel.getName()));
				}
				if (RelationType.MANYTOMANY == columnModel.getRelation().getRelationType()) {

				}
				if (RelationType.ONETOONE == columnModel.getRelation().getRelationType()) {
					builder.append(setterGen(tableName, columnModel.getName()));
					if (columnModel.getRelation().getSource()) {
						builder.append("\t@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)\n\t@JoinColumn(name= \""
								+ columnModel.getRelation().getColumnName() + "\")\n");
					} else {
						builder.append("\t@OneToOne(mappedBy = \""
								+ columnModel.getRelation().getColumnName() + "\")\n");
					}
					builder.append(getterGen(tableName, columnModel.getName()));
				}
				if (RelationType.ONETOMANY == columnModel.getRelation().getRelationType()) {
					builder.append(setterGen("List<" + tableName + ">", columnModel.getName()));

					builder.append(getterGen("List<" + tableName + ">", columnModel.getName()));
				}

			} else {
				builder.append(setterGen(columnModel.getType(), columnModel.getName()));
				builder.append(getterGen(columnModel.getType(), columnModel.getName()));
			}
		}
		data.put("class_properties", propBuilder.toString());

		data.put("getters_setters", builder.toString());
		if (!packageBuilder.toString().isEmpty()) {
			packageBuilder.append("\timport java.util.List;");
		}
		data.put("import_statements", packageBuilder.toString());
		return data;
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

	public static String propertyGen(ColumnModel columnModel, String entity, String packageName) {
		StringBuilder builder = new StringBuilder();

		if (columnModel.getRelation() != null && columnModel.getRelation().getColumnName() != null) {
			return relation(columnModel, packageName, entity);
		}
		if (columnModel.getPrimary()) {
			builder.append("\t@Id\n");
		}
		if (columnModel.getAutoGen()) {
			builder.append("\t@GeneratedValue(strategy = GenerationType.IDENTITY)\n");
		}
		String column = "\"" + columnModel.getName() + "\"";
		builder.append("\t@Column(name = " + column + ", unique = " + columnModel.getUnique() + ", nullable = "
				+ !columnModel.getMandatory() + ")\n");

		builder.append("\tprivate " + columnModel.getType() + " " + columnModel.getName() + ";\n\n");
		return builder.toString();
	}

	public static String relation(ColumnModel columnModel, String packageName, String entity) {
		StringBuilder builder = new StringBuilder();
		String tableName = columnModel.getRelation().getTableName();
		tableName = tableName.substring(0, 1).toUpperCase() + tableName.substring(1);
		String column = "\"" + columnModel.getRelation().getColumnName() + "\"";
		if (RelationType.MANYTOONE == columnModel.getRelation().getRelationType()) {
			builder.append("\t@ManyToOne\n");
			builder.append("\t@JoinColumn(name=" + column + ", nullable = false)\n");
			builder.append("\tprivate " + tableName + " " + columnModel.getName() + ";\n\n");
		}
		if (RelationType.MANYTOMANY == columnModel.getRelation().getRelationType()) {

		}
		if (RelationType.ONETOONE == columnModel.getRelation().getRelationType()) {
			builder.append("\tprivate " + tableName + " " + columnModel.getName() + ";\n\n");
		}
		if (RelationType.ONETOMANY == columnModel.getRelation().getRelationType()) {
			builder.append("\t@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)\n");
			// builder.append("\t@JoinColumn(name=" + column + ")\n");
			builder.append("\tprivate List<" + tableName + "> " + columnModel.getName() + ";\n");

		}
		packageBuilder.append("import " + packageName + "." + tableName.toLowerCase() + "." + tableName + ";\n");

		return builder.toString();
	}
}
