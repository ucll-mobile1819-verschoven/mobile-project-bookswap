package be.ucll.swapbook.domain;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.Valid;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue
    private long userId;

    private String firstname;
    private String lastname;
    private String residence;
    private String email;
    private String password;
    private List<Book> books;

    public User(String firstname, String lastname, String residence, String email, String password) {
        setFirstname(firstname);
        setLastname(lastname);
        setResidence(residence);
        setEmail(email);
        setPassword(password);
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getResidence() {
        return residence;
    }

    public void setResidence(String residence) {
        this.residence = residence;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Book> getBooks() {
        return this.books;
    }

    public void addBook(Book book) {
        books.add(book);
    }

    public void sellBook(Book book) {
        books.remove(book);
    }
}
