package com.code.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.code.*" })
@EnableJpaRepositories(basePackages = {"com.code.*"})
@EntityScan(basePackages = {"com.code.*"})
public class MainAppController {

	public static void main(String[] args) {
		SpringApplication.run(MainAppController.class, args);
		
	}

}
