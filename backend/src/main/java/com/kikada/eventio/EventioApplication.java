package com.kikada.eventio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class EventioApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventioApplication.class, args);
	}

}
