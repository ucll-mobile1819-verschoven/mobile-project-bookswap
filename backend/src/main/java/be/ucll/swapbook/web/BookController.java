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
/*
    @GetMapping("{userId}/book")
    public List<Book> getAllBooksFromUser(@PathVariable String userId) {
        return bookService.getAllBooksByUserId(userId);
    }
*/
    @PostMapping("{userId}/book")
    @ResponseStatus(HttpStatus.CREATED)
    public void createNewFeedback(@RequestBody @Valid Book book, @PathVariable String userId) {
        book.setBookUserId(userId);
        bookService.addBook(book);
    }
}
