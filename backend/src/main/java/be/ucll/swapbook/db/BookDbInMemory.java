package be.ucll.swapbook.db;


import be.ucll.swapbook.model.Book;
import be.ucll.swapbook.model.User;
import jdk.nashorn.internal.ir.LiteralNode;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;

public class BookDbInMemory implements BookDb {

    HashMap<Long, Book> books;

    public BookDbInMemory() {
        books = new HashMap<>();

        Book papertowns = new Book();
        papertowns.setBookId(1);
        papertowns.setTitle("Papertowns");
        papertowns.setAuthor("John Green");
        papertowns.setCondition("as new");
        papertowns.setIsbn("0123456789123");
        papertowns.setPrice(5);
        papertowns.setBookUserId(1);

        books.put(papertowns.getBookId(), papertowns);

        Book engelenhuis = new Book();
        engelenhuis.setBookId(2);
        engelenhuis.setTitle("Het engelenhuis");
        engelenhuis.setAuthor("Dirk Bracke");
        engelenhuis.setCondition("as new");
        engelenhuis.setIsbn("9789059083363");
        engelenhuis.setPrice(3);
        engelenhuis.setBookUserId(1);

        books.put(engelenhuis.getBookId(), engelenhuis);

        Book vuurbeker = new Book();
        vuurbeker.setBookId(3);
        vuurbeker.setTitle("Harry Potter en de vuurbeker");
        vuurbeker.setAuthor("J.K. Rowling");
        vuurbeker.setCondition("used");
        vuurbeker.setIsbn("9789544466213");
        vuurbeker.setPrice(8);
        vuurbeker.setBookUserId(2);

        books.put(vuurbeker.getBookId(), vuurbeker);

    }

    @Override
    public void addBook(Book book) {
        if (book == null) {
            throw new DbException("Invalid book");
        }

        books.put(book.getBookId(), book);
    }

    @Override
    public void removeBook(long bookId) {
        books.remove(bookId);
    }

    @Override
    public void updateBook(long bookId, Book book) {
        books.put(bookId, book);

    }

    @Override
    public Book getBook(long id) {
        return books.get(id);
    }

    @Override
    public ArrayList<Book> getBooksByUserId(long id) {
        ArrayList<Book> books = new ArrayList<>(this.books.values());

        for (Book b : books) {
            if (b.getBookUserId() != id ) {
                books.remove(b);
            }
        }
        return books;
    }

    @Override
    public Collection<Book> getAllBooks() {
        return books.values();
    }
}
