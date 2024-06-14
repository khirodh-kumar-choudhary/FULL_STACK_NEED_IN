package com.needin.request;

public class emploginrequest {
	
	private String email;
	private String emppassword;
	
	
	public emploginrequest() {
		// TODO Auto-generated constructor stub
	}


	public emploginrequest(String email, String password) {
		super();
		this.email = email;
		this.emppassword = emppassword;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return emppassword;
	}


	public void setPassword(String password) {
		this.emppassword = password;
	}
	
	

}
