package be.ucll.swapbook.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Objects;

@Entity
public class Book {

    @Id
    @GeneratedValue
    private long bookId;

    @NotNull(message = "Invalid title")
    @Size(min = 1, max = 30, message = "Invalid title")
    private String title;

    @NotNull(message = "Invalid author")
    @Size(min = 1, max = 50, message = "Invalid author")
    private String author;

    @NotNull(message = "Invalid isbn")
    @Size(min = 13, max = 13, message = "Invalid isbn")
    private String isbn;

    @NotNull(message = "Invalid price")
    @DecimalMin(value = "0.0", message = "Price can't be negative")
    private String price;

    @NotNull(message = "Invalid condition")
    @Size(min = 1, max = 10, message = "Invalid condition")
    private String condition;

    public Book(String title, String author, String isbn, String price, String condition) {
        setTitle(title);
        setAuthor(author);
        setIsbn(isbn);
        setPrice(price);
        setCondition(condition);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Book) {
            Book b = (Book) o;
            if(b.getTitle().equals(this.getTitle()) && b.getAuthor().equals(this.getAuthor())) {
                return true;
            }
        }

        return false;
    }

}
