package com.kotak.ekyc.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan(basePackages = { "com.kotak.*" })
@EnableJpaRepositories(basePackages = {"com.kotak.*"})
@EntityScan(basePackages = {"com.kotak.*"})
/* @CrossOrigin(origins = "*", allowedHeaders = "*") */
public class MainSpringBootApp {

	public static void main(String[] args) {
		SpringApplication.run(MainSpringBootApp.class, args);		
	}

}
