import { db } from '../config/db';

export const addBook =  (book) => {
    db.ref('/book').push({
        name: book
    });
}