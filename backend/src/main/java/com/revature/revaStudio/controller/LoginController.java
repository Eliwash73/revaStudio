package com.revature.revaStudio.controller;

import com.revature.revaStudio.entity.User;
import com.revature.revaStudio.repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
//@RequestMapping("hello")
public class LoginController {

    UserRepository userRepository;

    @GetMapping()
    public String hello(){
        return "TEST USER";
    }
        @GetMapping("admin")
    public String helloAdmin(){
        return "TEST ADMIN";
    }

    @GetMapping("/test-user")
    public String testUser() {
        Optional<User> user = userRepository.findByUsername("admin");
        return user.isPresent() ? "FOUND" : "NOT FOUND";
    }

}
