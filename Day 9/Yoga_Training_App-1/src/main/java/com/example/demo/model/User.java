package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class User
{
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private String userid;
private String firstname;
private String lastname;
private String emailid;
private String password;
private String confirmpassword;

public String getUserid() {
	return userid;
}
public void setUserid(String userid) {
	this.userid = userid;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getConfirmpassword() {
	return confirmpassword;
}
public void setConfirmpassword(String confirmpassword) {
	this.confirmpassword = confirmpassword;
}
@Override
public String toString() {
	return "User [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", emailid=" + emailid
			+ ", password=" + password + ", confirmpassword=" + confirmpassword + "]";
}



}