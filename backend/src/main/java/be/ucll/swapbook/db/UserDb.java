package be.ucll.swapbook.db;

import be.ucll.swapbook.model.User;

import java.util.Collection;

public interface UserDb {

    void addUser(User user);
    void removeUser(long userId);
    void updateUser(long userId, User user);
    User getUserByEmail(String email);
    User getUser(long userId);
    Collection<User> getAllUsers();
}
