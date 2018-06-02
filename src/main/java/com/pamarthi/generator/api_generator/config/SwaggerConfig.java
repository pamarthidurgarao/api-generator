package com.pamarthi.generator.api_generator.config;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig /* extends WebMvcConfigurationSupport */ {
	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.pamarthi.generator.api_generator"))
				.paths(PathSelectors.any()).build().apiInfo(metaData());
	}

	private ApiInfo metaData() {
		return new ApiInfoBuilder().title("API Generator").version("1.0.0").build();
	}

	@Bean
	public EmbeddedServletContainerCustomizer singlePageAppRouting() {
		return new EmbeddedServletContainerCustomizer() {
			@Override
			public void customize(ConfigurableEmbeddedServletContainer container) {
				container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/"));
			}
		};
	}

	/*
	 * @Override protected void addResourceHandlers(ResourceHandlerRegistry
	 * registry) {
	 * registry.addResourceHandler("swagger-ui.html").addResourceLocations(
	 * "classpath:/META-INF/resources/");
	 * 
	 * registry.addResourceHandler("/webjars/**").addResourceLocations(
	 * "classpath:/META-INF/resources/webjars/"); }
	 */
}