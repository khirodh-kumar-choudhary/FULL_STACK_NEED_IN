package com.needin.Empregistration;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "employee_id", length = 45)
    private int employeeid;

    @Column(name = "employee_name", length = 255)
    private String employeename;

    @Column(name = "address", length = 255)
    private String address;

    @Column(name = "mobile", length = 20)
    private String mobile;

    @Column(name = "longitude", length = 255)
    private String longitude;

    @Column(name = "latitude", length = 255)
    private String latitude;

    @Column(name = "age", length = 3) // Adjust length based on your requirements
    private String age;

    @Column(name = "email", length = 255)
    private String email;
    
    @Column(name = "emppassword", length = 50)
    private String emppassword;

    @Column(name = "skill", length = 100) // Adjust length based on your requirements
    private String skill;

    @Column(name = "gender", length = 10)
    private String gender;

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
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

	public Employee(int employeeid, String employeename, String address, String mobile, String longitude,
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

	@Override
	public String toString() {
		return "Employee [employeeid=" + employeeid + ", employeename=" + employeename + ", address=" + address
				+ ", mobile=" + mobile + ", longitude=" + longitude + ", latitude=" + latitude + ", age=" + age
				+ ", email=" + email + ", emppassword=" + emppassword + ", skill=" + skill + ", gender=" + gender + "]";
	}

    // Getters and setters
    // Constructors
    // toString() method

    // Updated constructor
    
   
}
