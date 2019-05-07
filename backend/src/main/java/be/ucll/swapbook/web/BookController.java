package be.ucll.swapbook.web;

import be.ucll.swapbook.model.Book;
import be.ucll.swapbook.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class BookController {
    @Autowired
    BookService bookService;

    @GetMapping("books")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("{userId}/books")
    public List<Book> getAllBooksFromUser(@PathVariable("userId") long userId) {
        return bookService.getAllBooksByUserId(userId);
    }



}
