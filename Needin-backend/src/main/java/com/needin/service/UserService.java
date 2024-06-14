package com.needin.service;

import java.util.List;

import com.needin.exception.UserException;
import com.needin.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	// public String findUserMobileByJwt(String jwt) throws UserException;
	
	
	   List<User> getAllUsers();
	    User getUserById(Long id);
	    void deleteUser(Long id) throws UserException;
	

}
