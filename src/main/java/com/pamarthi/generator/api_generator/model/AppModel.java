package com.pamarthi.generator.api_generator.model;

import java.util.ArrayList;
import java.util.List;

public class AppModel {

	private String appName;

	private String packageName;

	private List<EntityModel> entites = new ArrayList<>();

	public String getAppName() {
		return appName;
	}

	public void setAppName(String appName) {
		this.appName = appName;
	}

	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public List<EntityModel> getEntites() {
		return entites;
	}

	public void setEntites(List<EntityModel> entites) {
		this.entites = entites;
	}

}
