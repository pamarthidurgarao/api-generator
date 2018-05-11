package com.pramati.demo.api_generator.util;

import java.io.File;

public class ProjectStructureGenerator {

	public static String systemPath = System.getProperty("java.io.tmpdir");

	public static void generator(String apiName) {
		apiName = apiName.toLowerCase();

		File apiDir = new File(systemPath + "/" + apiName);

		if (apiDir.exists()) {
			removeDirectory(apiDir);
			File classFolder = new File(systemPath + "/output");
			removeDirectory(classFolder);
			classFolder.mkdirs();
			apiDir = new File(systemPath + "/" + apiName + "/src/main/java");
			apiDir.mkdirs();
			apiDir = new File(systemPath + "/" + apiName + "/src/main/resources");
			apiDir.mkdirs();
		}
	}

	public static String packageGenerator(String apiName, String packageName) {
		apiName = apiName.toLowerCase();

		File apiDir = new File(systemPath + "/" + apiName + "/src/main/java");

		if (apiDir.exists()) {
			apiDir = new File(
					systemPath + "/" + apiName + "/src/main/java/" + packageName.toLowerCase().replace(".", "/"));
			apiDir.mkdirs();
		}
		return apiDir.getAbsolutePath();
	}

	public static void removeDirectory(File dir) {
		if (dir.isDirectory()) {
			File[] files = dir.listFiles();
			if (files != null && files.length > 0) {
				for (File aFile : files) {
					removeDirectory(aFile);
				}
			}
			dir.delete();
		} else {
			dir.delete();
		}
	}
}
