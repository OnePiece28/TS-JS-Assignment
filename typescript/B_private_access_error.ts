// B - this file intentionally FAILS to compile, to show how access modifiers are enforced.
// Run:  tsc --ignoreConfig B_private_access_error.ts
export {};

class LibraryMember {
  public memberID: number;
  private borrowedBooks: string[] = [];
  protected membershipType: string;

  constructor(memberID: number, membershipType: string) {
    this.memberID = memberID;
    this.membershipType = membershipType;
  }
}

const member = new LibraryMember(101, "Standard");

console.log(member.memberID);        // OK    - public
console.log(member.borrowedBooks);   // ERROR - private
console.log(member.membershipType);  // ERROR - protected
