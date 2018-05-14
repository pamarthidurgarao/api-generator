package com.pamarthi.generator.api_generator.entity;

import org.springframework.stereotype.Service;

import com.pamarthi.generator.api_generator.model.AppModel;
import com.pamarthi.generator.api_generator.model.ColumnModel;
import com.pamarthi.generator.api_generator.model.EntityModel;

@Service
public class AppGenerator {

	public void generate(AppModel appModel) {
		String app = appModel.getAppName();
		String packageName = appModel.getPackageName();
		ProjectStructureGenerator.generator(appModel.getAppName());
		PomGenerator pomGenerator = new PomGenerator();
		pomGenerator.generator(app, packageName);
		AppConfigGenerator appConfigGenerator = new AppConfigGenerator();
		appConfigGenerator.generator(packageName, app);
		SecurityConfigGenerator securityConfigGenerator = new SecurityConfigGenerator();
		securityConfigGenerator.generator(packageName, app);

		for (EntityModel entityModel : appModel.getEntites()) {
			String entity = entityModel.getName();
			EntityGenerator entityGenerator = new EntityGenerator();
			entityGenerator.generate(packageName, app, entityModel);
			RepositoryGenerator repositoryGenerator = new RepositoryGenerator();
			repositoryGenerator.generator(packageName, app, entity);
			ServiceGenerator serviceGenerator = new ServiceGenerator();
			serviceGenerator.generatorSerivce(packageName, app, entity);
			serviceGenerator.generatorSerivceImpl(packageName, app, entity);
			ControllerGenerator controllerGenerator = new ControllerGenerator();
			controllerGenerator.generator(packageName, app, entity);
		}
		SwaggerConfigGenerator swaggerConfigGenerator = new SwaggerConfigGenerator();
		swaggerConfigGenerator.generator(app, packageName);
	}

	public static void main(String[] args) {
		AppModel appModel = new AppModel();
		appModel.setAppName("api");
		appModel.setPackageName("com.app.doit");

		EntityModel entityModel = new EntityModel();
		entityModel.setName("Order");
		ColumnModel columnModel = new ColumnModel();
		columnModel.setName("orderId");
		columnModel.setMandatory(true);
		columnModel.setPrimary(true);
		columnModel.setType("String");
		entityModel.getColumns().add(columnModel);

		appModel.getEntites().add(entityModel);

		EntityModel entityModel1 = new EntityModel();
		entityModel1.setName("employee");
		ColumnModel columnModel1 = new ColumnModel();
		columnModel1.setName("empId");
		columnModel1.setMandatory(true);
		columnModel1.setPrimary(true);
		columnModel1.setType("Integer");
		entityModel1.getColumns().add(columnModel1);

		appModel.getEntites().add(entityModel1);

		AppGenerator generator = new AppGenerator();
		generator.generate(appModel);
	}

}
