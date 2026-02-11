package com.revature.revaStudio.service;

import com.revature.revaStudio.entity.User;
import com.revature.revaStudio.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.jspecify.annotations.NullMarked;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    public final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository){
        this.userRepository = userRepository;
        System.out.println("reached");
    }

    @Autowired
    private DataSource dataSource;

    @PostConstruct
    public void printDbInfo() throws Exception {
        System.out.println("DB URL: " + dataSource.getConnection().getMetaData().getURL());
    }

    @Override
    @NullMarked
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        System.out.println("Incoming username: [" + username + "]");
        Optional<User> optionalUser = userRepository.findByUsername(username);
        System.out.println("User present: " + optionalUser.isPresent());
        User user = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        System.out.println("reached");
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        return user;
    }
}
