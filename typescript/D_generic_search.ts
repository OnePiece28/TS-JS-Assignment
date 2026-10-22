// D. Generic Function
export {};

interface Book {
  bookID: number;
  title: string;
  author: string;
}

interface LibraryMember {
  memberID: number;
  name: string;
}

function searchItem<T>(items: T[], condition: (item: T) => boolean): T[] {
  return items.filter(condition);
}

const books: Book[] = [
  { bookID: 1, title: "Clean Code", author: "Robert C. Martin" },
  { bookID: 2, title: "Learning TypeScript", author: "Josh Goldberg" },
  { bookID: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
  { bookID: 4, title: "TypeScript Handbook", author: "Microsoft" }
];

const members: LibraryMember[] = [
  { memberID: 101, name: "Rahul" },
  { memberID: 102, name: "Priya" },
  { memberID: 103, name: "Amit" }
];

// Search books by title
const keyword = "typescript";
const foundBooks = searchItem<Book>(books, b => b.title.toLowerCase().includes(keyword));
console.log(`Books with "${keyword}" in the title:`);
console.log(foundBooks);

// Search library members by member ID
const foundMembers = searchItem<LibraryMember>(members, m => m.memberID === 102);
console.log("Member with ID 102:");
console.log(foundMembers);

// No match
console.log("Member with ID 999:", searchItem(members, m => m.memberID === 999));
