package com.needin.Empregistration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//
//
//
//@RestController
//@CrossOrigin("http://localhost:3000")
//@RequestMapping("api/v1/employee")
//public class EmployeeController {
//
//    @Autowired
//    private EmployeeService employeeService;
//
//    @PostMapping(path = "/save")
//    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO)
//    {
//        String id = employeeService.addEmployee(employeeDTO);
//        return id;
//    	
//    
//    }
//}

import com.needin.request.emploginrequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("api/v1/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Existing endpoint to save employee
    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO) {
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }
    
    // New endpoint for employee login
    @PostMapping(path = "/login")
    public ResponseEntity<String> login(@RequestBody emploginrequest loginRequest) {
        boolean loginSuccessful = employeeService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        if (loginSuccessful) {
            // Return a JWT token on successful login
            String token = generateJwtToken(loginRequest.getEmail());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    
    // Method to generate JWT token (you need to implement this)
    private String generateJwtToken(String email) {
        // Implement JWT token generation logic here
        return "Generated JWT token";
    }
}
