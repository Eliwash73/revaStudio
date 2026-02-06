package com.revature.revaStudio.service;

import com.revature.revaStudio.entity.Employee;
import com.revature.revaStudio.entity.SalesAssistance;
import com.revature.revaStudio.repository.SalesAssistanceRepository;
import org.springframework.stereotype.Service;

@Service
public class SalesAssistanceService {

    private SalesAssistanceRepository salesAssistanceRepository;
    private SalesAssistance salesAssistance;
    public SalesAssistanceService(SalesAssistanceRepository salesAssistanceRepository, SalesAssistance salesAssistance){
        this.salesAssistanceRepository = salesAssistanceRepository;
        this.salesAssistance = salesAssistance;
    }

}
