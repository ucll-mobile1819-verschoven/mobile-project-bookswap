package be.ucll.swapbook.service;

import be.ucll.swapbook.db.BookDb;
import be.ucll.swapbook.db.UserDb;
import be.ucll.swapbook.db.UserDbInMemory;
import be.ucll.swapbook.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserService {

    UserDbInMemory userDb = new UserDbInMemory();

    public UserService() {}

    public List<User> getAllUsers() {
        ArrayList<User> users = new ArrayList<>(userDb.getAllUsers());

        return users;


    }

    public void addUser(User user) {
        userDb.addUser(user);
    }

    public void deleteUser(long userId) {
        userDb.removeUser(userId);
    }
}
