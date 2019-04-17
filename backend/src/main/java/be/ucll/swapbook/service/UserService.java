package be.ucll.swapbook.service;

import be.ucll.swapbook.db.BookDb;
import be.ucll.swapbook.db.UserDb;
import be.ucll.swapbook.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserDb userDb;

    public UserService() {}

    public List<User> getAllUsers() {
        return userDb.findAll();
    }

    public void addUser(User user) {
        userDb.save(user);
    }

    public void deleteUser(User user) {
        userDb.delete(user);
    }
}
