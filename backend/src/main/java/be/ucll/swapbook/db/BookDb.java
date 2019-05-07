package be.ucll.swapbook.db;

import be.ucll.swapbook.model.Book;
import be.ucll.swapbook.model.User;

import java.util.ArrayList;
import java.util.Collection;


public interface BookDb {
    void addBook(Book book);
    void removeBook(long bookId);
    void updateBook(long bookId, Book book);
    Book getBook(long id);
    ArrayList<Book> getBooksByUserId(long id);
    Collection<Book> getAllBooks();

}
