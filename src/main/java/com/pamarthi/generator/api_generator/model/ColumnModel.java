package com.pamarthi.generator.api_generator.model;

public class ColumnModel {

	private String name;
	private String type;
	private boolean isMandatory;
	private boolean isPrimary;
	private boolean isUnique;
	private boolean isAutoGen;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isMandatory() {
		return isMandatory;
	}

	public void setMandatory(boolean isMandatory) {
		this.isMandatory = isMandatory;
	}

	public boolean isPrimary() {
		return isPrimary;
	}

	public void setPrimary(boolean isPrimary) {
		this.isPrimary = isPrimary;
	}

	public boolean isUnique() {
		return isUnique;
	}

	public void setUnique(boolean isUnique) {
		this.isUnique = isUnique;
	}

	public boolean isAutoGen() {
		return isAutoGen;
	}

	public void setAutoGen(boolean isAutoGen) {
		this.isAutoGen = isAutoGen;
	}

}
