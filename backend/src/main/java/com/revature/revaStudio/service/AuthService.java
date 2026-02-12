package com.revature.revaStudio.service;

import com.revature.revaStudio.dto.LoginRequest;
import com.revature.revaStudio.entity.User;
import com.revature.revaStudio.enums.UserRole;
import com.revature.revaStudio.util.JwtUtility;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtUtility jwtUtility;

    public String login(LoginRequest request) {
        System.out.println("Authenticating: " + request.username());
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.username(),
                        request.password()
                )
        );
        System.out.println("Authenticated: " + authentication.isAuthenticated());
        User user = (User) authentication.getPrincipal();
        if (user == null){
            throw new IllegalStateException("Authenticated user is null");
        }

        return jwtUtility.generateAccessToken(
                user.getUsername(),
                UserRole.valueOf(user.getRole())
        );
    }
}