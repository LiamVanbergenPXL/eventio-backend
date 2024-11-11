package com.kikada.eventio.Config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                title = "Eventio API",
                version = "1.0",
                description = "Eventio API Documentation",
                contact = @io.swagger.v3.oas.annotations.info.Contact(
                        name = "Kikada",
                        email = "Vanbergen.liam@outlook.com"
                )

        ),
        servers = {
                @Server(
                        url = "http://localhost:8085",
                        description = "Local server"
                )
        }
)
public class OpenApiConfig {

}
