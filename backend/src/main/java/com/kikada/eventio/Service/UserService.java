package com.kikada.eventio.Service;

import com.kikada.eventio.DTO.LoginDTO;
import com.kikada.eventio.DTO.UserDTO;
import com.kikada.eventio.Response.LoginResponse;

public interface UserService {

    String addUser(UserDTO userDTO);

    LoginResponse loginUser(LoginDTO loginDTO);
}
