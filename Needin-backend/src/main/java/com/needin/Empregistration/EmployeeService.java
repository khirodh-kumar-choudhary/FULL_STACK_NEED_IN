package com.needin.Empregistration;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);

	boolean authenticate(String email, String password);
}