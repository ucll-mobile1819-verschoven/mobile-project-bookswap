package be.ucll.swapbook.service;

import be.ucll.swapbook.db.BookDb;
import be.ucll.swapbook.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    BookDb bookDb;

    public BookService() {}

    public List<Book> getAllBooks() {
        return bookDb.findAll();
    }
/*
    public List<Book> getAllBooksByUserId(String userId) {
        return bookDb.findBooksByUserId(userId);
    }
*/
    public void addBook(Book book) {
        bookDb.save(book);
    }
}
