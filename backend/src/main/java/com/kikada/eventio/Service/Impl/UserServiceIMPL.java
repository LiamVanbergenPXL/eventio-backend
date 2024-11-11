package com.kikada.eventio.Service.Impl;

import com.kikada.eventio.DTO.LoginDTO;
import com.kikada.eventio.DTO.UserDTO;
import com.kikada.eventio.Entity.User;
import com.kikada.eventio.Response.LoginResponse;
import com.kikada.eventio.Repository.UserRepository;
import com.kikada.eventio.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceIMPL implements UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword()),
                userDTO.getUsername()
        );
        userRepository.save(user);
        return "User saved with id: " + user.getId();
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        User user = userRepository.findByEmail(loginDTO.getEmail());
        if (user != null ) {
            if(passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
                Optional<User> userOptional = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), user.getPassword());
                if (userOptional.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("Password Incorrect", false);
            }
        } else {
            return new LoginResponse("Email not found", false);
        }
    }
}
