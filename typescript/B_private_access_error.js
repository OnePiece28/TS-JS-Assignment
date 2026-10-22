class LibraryMember {
    memberID;
    borrowedBooks = [];
    membershipType;
    constructor(memberID, membershipType) {
        this.memberID = memberID;
        this.membershipType = membershipType;
    }
}
const member = new LibraryMember(101, "Standard");
console.log(member.memberID); // OK    - public
console.log(member.borrowedBooks); // ERROR - private
console.log(member.membershipType); // ERROR - protected
export {};
