package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class ApiService
{
@Autowired
UserRepo repository;
public boolean addUser(User user)
{
repository.save(user);
return true;
}
public List<User>getUser()
{
return repository.findAll();
}
public Optional<User>getUserById(String emailid)
{
return repository.findById(emailid);
}
public User updateUser(User user)
{
repository.save(user);
return user;
}
public boolean deleteUserById(String emailid)
{
repository.deleteById(emailid);
return true;
}
}
