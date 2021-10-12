package com.kotak.ekyc.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.kotak.*" })
@EnableJpaRepositories(basePackages = {"com.kotak.*"})
@EntityScan(basePackages = {"com.kotak.*"})
public class AddressMainController {
	
	public static void main(String[] args) {
		SpringApplication.run(AddressMainController.class, args);
	}

}
