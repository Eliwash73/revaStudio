package com.revature.revaStudio.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Integer Id;

    @Column(name = "role_id")
    private Integer RoleId;

    @Column(nullable = false)
    private String Role;

    @Column(unique = true,nullable = false)
    private String Username;

    @Column(nullable = false)
    private String Password;

}
