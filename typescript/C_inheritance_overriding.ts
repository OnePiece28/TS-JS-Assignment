// C. Inheritance and Method Overriding
export {};

class LibraryItem {
  itemID: number;
  title: string;

  constructor(itemID: number, title: string) {
    this.itemID = itemID;
    this.title = title;
  }

  displayInfo(): void {
    console.log(`Item ID: ${this.itemID} | Title: ${this.title}`);
  }
}

class Book extends LibraryItem {
  author: string;
  pages: number;

  constructor(itemID: number, title: string, author: string, pages: number) {
    super(itemID, title);
    this.author = author;
    this.pages = pages;
  }

  override displayInfo(): void {
    console.log(`[Book] ID: ${this.itemID} | Title: ${this.title} | Author: ${this.author} | Pages: ${this.pages}`);
  }
}

class Magazine extends LibraryItem {
  issueNumber: number;
  publisher: string;

  constructor(itemID: number, title: string, issueNumber: number, publisher: string) {
    super(itemID, title);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }

  override displayInfo(): void {
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
const items: LibraryItem[] = [item, book, magazine];
items.forEach(i => i.displayInfo());
