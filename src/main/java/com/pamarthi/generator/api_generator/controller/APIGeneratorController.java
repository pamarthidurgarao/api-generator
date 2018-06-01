package com.pamarthi.generator.api_generator.controller;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pamarthi.generator.api_generator.entity.AppGenerator;
import com.pamarthi.generator.api_generator.model.AppModel;
import com.pamarthi.generator.api_generator.util.ZipFileGenerator;

@CrossOrigin(origins = { "http://localhost:4200" }, maxAge = 3000)
@RestController
@RequestMapping("/api")
public class APIGeneratorController {

	@Autowired
	private AppGenerator generator;

	@Autowired
	private ServletContext servletContext;

	public static String systemPath = System.getProperty("java.io.tmpdir");

	@PostMapping("/generate")
	public void apiGen(@RequestBody AppModel appModel) {
		generator.generate(appModel);
	}

	@GetMapping("/download")
	public ResponseEntity<Resource> downloadFile(@RequestParam String fileName) throws IOException {

		ZipFileGenerator.pack(systemPath + "/" + fileName, systemPath + "/" + fileName + ".zip");
		// MediaType mediaType =
		// MediaTypeUtils.getMediaTypeForFileName(this.servletContext, fileName);

		File file = new File(systemPath + "/" + fileName + ".zip");

		try {
			Path file1 = file.toPath();
			Resource resource = new UrlResource(file1.toUri());
			if (resource.exists() || resource.isReadable()) {
				return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
						"attachment; filename=\"" + resource.getFilename() + "\"").body(resource);
			} else {
				throw new RuntimeException("FAIL!");
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("FAIL!");
		}
		/*
		 * resonse.setContentType(mediaType.getType());
		 * resonse.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" +
		 * file.getName()); resonse.setContentLength((int) file.length());
		 * 
		 * BufferedInputStream inStream = new BufferedInputStream(new
		 * FileInputStream(file)); BufferedOutputStream outStream = new
		 * BufferedOutputStream(resonse.getOutputStream());
		 * 
		 * byte[] buffer = new byte[1024]; int bytesRead = 0; while ((bytesRead =
		 * inStream.read(buffer)) != -1) { outStream.write(buffer, 0, bytesRead); }
		 * outStream.flush(); inStream.close();
		 */ }
}
