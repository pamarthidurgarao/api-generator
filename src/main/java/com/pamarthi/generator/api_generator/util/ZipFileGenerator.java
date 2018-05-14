package com.pamarthi.generator.api_generator.util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class ZipFileGenerator {

	public static String systemPath = System.getProperty("java.io.tmpdir");

	public static void main(String[] args) {

		try {

			String app = "api";
			File fos = new File(systemPath + "/" + app + ".zip");
			if (fos.exists()) {
				fos.delete();
			}
			pack(systemPath + "/" + app, systemPath + "/" + app + ".zip");

		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}

	public static void pack(String sourceDirPath, String zipFilePath) throws IOException {

		Path p = Files.createFile(Paths.get(zipFilePath));
		try (ZipOutputStream zs = new ZipOutputStream(Files.newOutputStream(p))) {
			Path pp = Paths.get(sourceDirPath);
			Files.walk(pp).filter(path -> !Files.isDirectory(path)).forEach(path -> {
				ZipEntry zipEntry = new ZipEntry(pp.relativize(path).toString());
				try {
					zs.putNextEntry(zipEntry);
					Files.copy(path, zs);
					zs.closeEntry();
				} catch (IOException e) {
					System.err.println(e);
				}
			});
		}
	}

}
