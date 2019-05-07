package be.ucll.swapbook.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private long userId;

    @NotNull(message = "Invalid first name")
    @Size(min = 1, max = 30, message = "Invalid first name")
    private String firstname;

    @NotNull(message = "Invalid last name")
    @Size(min = 1, max = 30, message = "Invalid last name")
    private String lastname;

    @NotNull(message = "Invalid residence")
    @Size(min = 1, max = 50, message = "Invalid residence")
    private String residence;

    @NotNull(message = "Invalid email")
    @Size(min = 1, max = 30, message = "Invalid email")
    @Email(message = "Invalid email")
    private String email;

    @NotNull(message = "Invalid title")
    @Size(min = 1, max = 30, message = "Invalid title")
    @JsonIgnore
    private String password;

    //@OneToMany
    //@JoinColumn(name = "bookUserId", referencedColumnName = "userId")
    //private List<Book> books;

    public User() {}

    public User(String firstname, String lastname, String residence, String email, String password) {
        setFirstname(firstname);
        setLastname(lastname);
        setResidence(residence);
        setEmail(email);
        setPassword(password);
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
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
/*
    public List<Book> getBooks() {
        return this.books;
    }

    public void addBook(Book book) {
        books.add(book);
    }

    public void sellBook(Book book) {
        books.remove(book);
    }
    */
}
