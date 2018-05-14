package com.pamarthi.generator.api_generator.model;

import java.util.ArrayList;
import java.util.List;

public class EntityModel {

	private String name;

	private List<ColumnModel> columns = new ArrayList<>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<ColumnModel> getColumns() {
		return columns;
	}

	public void setColumns(List<ColumnModel> columns) {
		this.columns = columns;
	}

}
