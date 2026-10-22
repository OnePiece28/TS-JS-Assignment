"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(bookID, title, author, isAvailable = true) {
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    displayDetails() {
        console.log(`ID: ${this.bookID} | Title: ${this.title} | Author: ${this.author} | Available: ${this.isAvailable ? "Yes" : "No"}`);
    }
    issueBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`"${this.title}" has been issued.`);
        }
        else {
            console.log(`"${this.title}" is already issued.`);
        }
    }
    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`"${this.title}" has been returned.`);
        }
        else {
            console.log(`"${this.title}" was not issued.`);
        }
    }
}
const book1 = new Book(1, "Clean Code", "Robert C. Martin");
const book2 = new Book(2, "The Pragmatic Programmer", "Andrew Hunt");
console.log("--- Book details ---");
book1.displayDetails();
book2.displayDetails();
console.log("\n--- Issue a book ---");
book1.issueBook();
book1.issueBook(); // already issued
book1.displayDetails();
console.log("\n--- Return a book ---");
book1.returnBook();
book1.returnBook(); // was not issued
book1.displayDetails();
