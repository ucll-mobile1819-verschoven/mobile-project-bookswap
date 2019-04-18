package be.ucll.swapbook.web;

import be.ucll.swapbook.model.User;
import be.ucll.swapbook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
