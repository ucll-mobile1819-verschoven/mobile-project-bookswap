package be.ucll.swapbook.db;

import be.ucll.swapbook.model.User;

import java.util.Collection;
import java.util.HashMap;

public class UserDbInMemory implements UserDb {
    private HashMap<Long, User> users;

    public UserDbInMemory() {
        users = new HashMap<>();

        User jana = new User();
        jana.setUserId(1);
        jana.setFirstname("Jana");
        jana.setLastname("Mineur");
        jana.setEmail("jana@swapbook.be");
        jana.setPassword("jana");
        jana.setResidence("Scherpenheuvel");

        users.put(jana.getUserId(), jana);

        User daan = new User();
        daan.setUserId(2);
        daan.setFirstname("Daan");
        daan.setLastname("Lemmens");
        daan.setEmail("daan@swapbook.be");
        daan.setPassword("daan");
        daan.setResidence("Leuven");

        users.put(daan.getUserId(), daan);


    }

    @Override
    public void addUser(User user) {
        if (user == null) {
            throw new DbException("Invalid user.");
        }

        users.put(user.getUserId(), user);
    }

    @Override
    public void removeUser(long userId) {
        if (userId <= 0) {
            throw new DbException("Invalid user id.");
        }

        users.remove(userId);

    }

    @Override
    public void updateUser(long userId, User user) {
        if (user == null || userId <= 0) {
            throw new DbException("Invalid user id or user.");
        }

        users.replace(userId, user);
    }

    @Override
    public User getUserByEmail(String email) {
        for(User user:this.users.values()) {
            if (user.getEmail().equalsIgnoreCase(email)) {
                return user;
            }
        }

        throw new DbException("user not found");
    }

    @Override
    public User getUser(long userId) {
        return users.get(userId);
    }

    @Override
    public Collection<User> getAllUsers() {
        return this.users.values();
    }
}
