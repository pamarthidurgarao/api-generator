package com.pamarthi.generator.api_generator.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pamarthi.generator.api_generator.entity.AppGenerator;
import com.pamarthi.generator.api_generator.model.AppModel;

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
	public void downloadFile(HttpServletResponse resonse, @RequestParam String fileName) throws IOException {

		MediaType mediaType = MediaTypeUtils.getMediaTypeForFileName(this.servletContext, fileName);

		File file = new File(systemPath + "/" + fileName);

		resonse.setContentType(mediaType.getType());
		resonse.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName());
		resonse.setContentLength((int) file.length());

		BufferedInputStream inStream = new BufferedInputStream(new FileInputStream(file));
		BufferedOutputStream outStream = new BufferedOutputStream(resonse.getOutputStream());

		byte[] buffer = new byte[1024];
		int bytesRead = 0;
		while ((bytesRead = inStream.read(buffer)) != -1) {
			outStream.write(buffer, 0, bytesRead);
		}
		outStream.flush();
		inStream.close();
	}
}
