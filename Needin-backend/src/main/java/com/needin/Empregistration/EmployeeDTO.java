package com.needin.Empregistration;

public class EmployeeDTO {

    private int employeeid;
    private String employeename;
    private String address;
    private String mobile;
    private String longitude;
    private String latitude;
    private String age; // New field
    private String email; // New field
    private String emppassword;
    private String skill; // New field
    private String gender; // New field
	public EmployeeDTO(int employeeid, String employeename, String address, String mobile, String longitude,
			String latitude, String age, String email, String emppassword, String skill, String gender) {
		super();
		this.employeeid = employeeid;
		this.employeename = employeename;
		this.address = address;
		this.mobile = mobile;
		this.longitude = longitude;
		this.latitude = latitude;
		this.age = age;
		this.email = email;
		this.emppassword = emppassword;
		this.skill = skill;
		this.gender = gender;
	}
	public int getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(int employeeid) {
		this.employeeid = employeeid;
	}
	public String getEmployeename() {
		return employeename;
	}
	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getLongitude() {
		return longitude;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEmppassword() {
		return emppassword;
	}
	public void setEmppassword(String emppassword) {
		this.emppassword = emppassword;
	}
	public String getSkill() {
		return skill;
	}
	public void setSkill(String skill) {
		this.skill = skill;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public EmployeeDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "EmployeeDTO [employeeid=" + employeeid + ", employeename=" + employeename + ", address=" + address
				+ ", mobile=" + mobile + ", longitude=" + longitude + ", latitude=" + latitude + ", age=" + age
				+ ", email=" + email + ", emppassword=" + emppassword + ", skill=" + skill + ", gender=" + gender + "]";
	}

   
}
