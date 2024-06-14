// EmployeeServiceImpl.java

package com.needin.Empregistration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmployeeImpl implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        employee.setEmployeename(employeeDTO.getEmployeename());
        employee.setAddress(employeeDTO.getAddress());
        employee.setMobile(employeeDTO.getMobile());
        employee.setLongitude(employeeDTO.getLongitude());
        employee.setLatitude(employeeDTO.getLatitude());
        employee.setAge(employeeDTO.getAge());
        employee.setEmail(employeeDTO.getEmail());
        employee.setEmppassword(employeeDTO.getEmppassword());
        employee.setSkill(employeeDTO.getSkill());
        employee.setGender(employeeDTO.getGender());

        employeeRepo.save(employee);
        return employee.getEmployeename();
    }
    
    
    
    
    @Override
    public boolean authenticate(String email, String password) {
        // Retrieve employee by email
        Employee employee = employeeRepo.findByEmail(email);
        if (employee != null) {
            // Check if the provided password matches the stored password
            return employee.getEmppassword().equals(password);
        } else {
            // Employee not found
            return false;
        }
    }
    
    
}
