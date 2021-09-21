package com.code.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan(basePackages = { "com.code.*" })
@EnableJpaRepositories(basePackages = {"com.code.*"})
@EntityScan(basePackages = {"com.code.*"})
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class MainAppController {

	public static void main(String[] args) {
		SpringApplication.run(MainAppController.class, args);
		
	}

}
