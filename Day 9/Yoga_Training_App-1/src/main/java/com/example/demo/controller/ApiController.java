package com.example.demo.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.User;
import com.example.demo.service.ApiService;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/user")
public class ApiController
{
@Autowired
ApiService service;
@PostMapping("")
public boolean create(@RequestBody User user)
{
return service.addUser(user);
}
@GetMapping("")
public List<User>read()
{
return service.getUser();
}
@GetMapping("/{emailid}")
public Optional<User>readById(@PathVariable String emailid)
{
return service.getUserById(emailid);
}
@PutMapping("/{emailid}")
public User update(@RequestBody User user)
{
return service.updateUser(user);
}
@DeleteMapping("/{emailid}")
public boolean delete(@PathVariable String emailid)
{
return service.deleteUserById(emailid);
}
}
