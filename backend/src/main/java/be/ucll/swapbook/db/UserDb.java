package be.ucll.swapbook.db;

import be.ucll.swapbook.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDb extends JpaRepository<User, String> {
}
