package com.revature.revaStudio.repository;

import com.revature.revaStudio.entity.SalesAssistance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesAssistanceRepository extends JpaRepository<SalesAssistance, Integer> {
}
