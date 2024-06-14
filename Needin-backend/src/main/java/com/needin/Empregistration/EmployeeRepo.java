package com.needin.Empregistration;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
 




@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {

	Employee findByEmail(String email);
}