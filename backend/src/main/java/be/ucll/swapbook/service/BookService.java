package be.ucll.swapbook.service;

import be.ucll.swapbook.db.BookDb;
import be.ucll.swapbook.db.BookDbInMemory;
import be.ucll.swapbook.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    BookDbInMemory bookDb = new BookDbInMemory();

    public BookService() {}
    public List<Book> getAllBooks() {
        ArrayList<Book> books = new ArrayList<>(bookDb.getAllBooks());
        return books;
    }

    public List<Book> getAllBooksByUserId(long userId) {
        return bookDb.getBooksByUserId(userId);
    }

    public void addBook(Book book) {
        bookDb.addBook(book);
    }

}
