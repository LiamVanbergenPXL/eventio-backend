package com.kikada.eventio.Service.impl;

import com.kikada.eventio.Dto.UserDTO;
import com.kikada.eventio.Entity.User;
import com.kikada.eventio.Repository.UserRepository;
import com.kikada.eventio.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserIMPL implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDto) {
        User user = new User(
                userDto.getEmail(),
                this.passwordEncoder.encode(userDto.getPassword()),
                userDto.getUserId(),
                userDto.getUsername()
        );

        userRepository.save(user);
        return user.getUsername();
    }
}
