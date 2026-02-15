package com.revature.revaStudio.controller;

import com.revature.revaStudio.dto.JwtTransport;
import com.revature.revaStudio.dto.LoginRequest;
import com.revature.revaStudio.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("login")
    public ResponseEntity<JwtTransport> loginUser(@RequestBody LoginRequest request) {
        String token = authService.login(request);
        return ResponseEntity.ok(new JwtTransport(token));
    }

}
