package be.ucll.swapbook.db;

import be.ucll.swapbook.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookDb extends JpaRepository<Book, String> {


}
