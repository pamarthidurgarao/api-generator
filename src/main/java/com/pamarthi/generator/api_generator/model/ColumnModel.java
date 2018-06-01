package com.pamarthi.generator.api_generator.model;

public class ColumnModel {

	private String name;
	private String type;
	private Boolean mandatory;
	private Boolean primary;
	private Boolean unique;
	private Boolean autoGen;
	private RelationModel relation;
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
	public Boolean getMandatory() {
		return mandatory;
	}
	public void setMandatory(Boolean mandatory) {
		this.mandatory = mandatory;
	}
	public Boolean getPrimary() {
		return primary;
	}
	public void setPrimary(Boolean primary) {
		this.primary = primary;
	}
	public Boolean getUnique() {
		return unique;
	}
	public void setUnique(Boolean unique) {
		this.unique = unique;
	}
	public Boolean getAutoGen() {
		return autoGen;
	}
	public void setAutoGen(Boolean autoGen) {
		this.autoGen = autoGen;
	}
	public RelationModel getRelation() {
		return relation;
	}
	public void setRelation(RelationModel relation) {
		this.relation = relation;
	}
	
	
}
