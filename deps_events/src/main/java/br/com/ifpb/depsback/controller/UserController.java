package br.com.ifpb.depsback.controller;

import br.com.ifpb.depsback.model.User;
import br.com.ifpb.depsback.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("create")
    public User create(@RequestBody User user) {
        return userService.create(user);
    }

    @GetMapping("readall")
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping(path = { "read/{id}" })
    public User findById(@PathVariable long id) {
        return userService.findById(id);
    }

    @PutMapping(value = "update/{id}")
    public User update(@PathVariable long id, @RequestBody User user) {
        return userService.update(id, user);
    }

    @DeleteMapping(path = { "delete/{id}" })
    public String delete(@PathVariable long id) {
        return userService.delete(id);
    }

    @DeleteMapping(path = { "deleteall" })
    public void deleteAll() {
        userService.deleteAll();
    }

    @PutMapping(path = { "login" })
    public User login( @RequestBody User user) {
        return userService.login(user);
    }

}

