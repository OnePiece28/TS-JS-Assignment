"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryMember {
    constructor(memberID, membershipType) {
        this.borrowedBooks = [];
        this.memberID = memberID;
        this.membershipType = membershipType;
    }
    // Inside the class: public, private and protected members are all accessible
    borrowBook(title) {
        this.borrowedBooks.push(title);
        console.log(`Member ${this.memberID} borrowed "${title}"`);
    }
    // private data is exposed only through a controlled public method
    showBorrowedBooks() {
        console.log(`Member ${this.memberID} has borrowed:`, this.borrowedBooks);
    }
}
class PremiumMember extends LibraryMember {
    constructor(memberID) {
        super(memberID, "Premium");
    }
    showMembership() {
        // protected: accessible inside the child class
        console.log(`Member ${this.memberID} membership type (read in child class): ${this.membershipType}`);
    }
}
const member = new PremiumMember(101);
// 1. public: accessible outside the class
console.log("public memberID (outside the class):", member.memberID);
// 2. private: only reachable through the class's own methods
member.borrowBook("Clean Code");
member.borrowBook("Refactoring");
member.showBorrowedBooks();
// console.log(member.borrowedBooks);
//   error TS2341: Property 'borrowedBooks' is private and only accessible within class 'LibraryMember'.
// 3. protected: accessible inside the class and its child classes, not outside
member.showMembership();
// console.log(member.membershipType);
//   error TS2445: Property 'membershipType' is protected and only accessible within class 'LibraryMember' and its subclasses.
//
// See B_private_access_error.ts, which shows these compile errors.
