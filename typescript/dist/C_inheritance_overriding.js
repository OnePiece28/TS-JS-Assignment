"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryItem {
    constructor(itemID, title) {
        this.itemID = itemID;
        this.title = title;
    }
    displayInfo() {
        console.log(`Item ID: ${this.itemID} | Title: ${this.title}`);
    }
}
class Book extends LibraryItem {
    constructor(itemID, title, author, pages) {
        super(itemID, title);
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`[Book] ID: ${this.itemID} | Title: ${this.title} | Author: ${this.author} | Pages: ${this.pages}`);
    }
}
class Magazine extends LibraryItem {
    constructor(itemID, title, issueNumber, publisher) {
        super(itemID, title);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
    displayInfo() {
        console.log(`[Magazine] ID: ${this.itemID} | Title: ${this.title} | Issue No: ${this.issueNumber} | Publisher: ${this.publisher}`);
    }
}
const item = new LibraryItem(1, "Generic Library Item");
const book = new Book(2, "Clean Code", "Robert C. Martin", 464);
const magazine = new Magazine(3, "National Geographic", 245, "National Geographic Society");
item.displayInfo();
book.displayInfo();
magazine.displayInfo();
console.log("\n--- Polymorphism: same call, different output ---");
const items = [item, book, magazine];
items.forEach(i => i.displayInfo());
