package com.revature.revaStudio.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long Id;

    @Column(name = "role_id")
    private Long RoleId;

    @Column(nullable = false)
    private String Role;

    @Column(unique = true,nullable = false)
    private String Username;

    @Column(nullable = false)
    private String Password;

}
