package com.revature.revaStudio.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Integer customerId;

    @Column(name = "first_name", nullable = false)
    private String customerFirstName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "support_rep_id",nullable = false)
    private Employee employee;
}
