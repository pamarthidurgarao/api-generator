package com.pamarthi.generator.api_generator.entity;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;

import javax.tools.JavaCompiler;
import javax.tools.StandardJavaFileManager;
import javax.tools.StandardLocation;
import javax.tools.ToolProvider;

import com.pamarthi.generator.api_generator.util.Utils;

public class ClassGenerator {

	public static void generate(String file, String content) {
		File sourceFile = new File(file);
		FileWriter writer;
		try {
			writer = new FileWriter(sourceFile);

			writer.write(content);
			writer.close();

			JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
			StandardJavaFileManager fileManager = compiler.getStandardFileManager(null, null, null);

			fileManager.setLocation(StandardLocation.CLASS_OUTPUT, Arrays.asList(new File("/tmp/output")));
			compiler.getTask(null, fileManager, null, null, null,
					fileManager.getJavaFileObjectsFromFiles(Arrays.asList(sourceFile))).call();
			fileManager.close();
			File dir = new File("/tmp/output");
			ClassLoader myClassLoader = ClassLoader.getSystemClassLoader();
			myClassLoader.loadClass("com.app.doit.user.User");
			loadClasses(dir);
			loadClasses(sourceFile);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static void loadClasses(File dir) {
		if (dir.isDirectory()) {
			File[] files = dir.listFiles();
			if (files != null && files.length > 0) {
				for (File aFile : files) {
					if (aFile.isFile()) {
						try {
							Utils.addFile(aFile);
						} catch (IOException e) {
							e.printStackTrace();
						}
					} else {
						loadClasses(aFile);
					}
				}
			}
		} else {
			try {
				Utils.addFile(dir);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
	}
}
