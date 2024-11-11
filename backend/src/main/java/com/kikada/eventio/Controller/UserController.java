package com.kikada.eventio.Controller;

import com.kikada.eventio.DTO.LoginDTO;
import com.kikada.eventio.DTO.UserDTO;
import com.kikada.eventio.Response.LoginResponse;
import com.kikada.eventio.Service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;


    @Operation(
            tags = "Save User",
            summary = "Save User",
            description = "Save User",
            method = "POST",
            operationId = "saveUser"
    )
    @PostMapping("/save")
    public String saveUser(@RequestBody UserDTO userDTO) {
        String id = userService.addUser(userDTO);
        return id;
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
