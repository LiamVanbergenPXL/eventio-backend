package com.kikada.eventio.Controller;

import com.kikada.eventio.Dto.UserDTO;
import com.kikada.eventio.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public String saveUser(@RequestBody UserDTO userDto) {
        String id = userService.addUser(userDto);
        return id;
    }
}
