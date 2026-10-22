// Q5. JavaScript Classes
class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }

  checkBalance() {
    console.log(`${this.accountHolder}'s current balance: ${this.balance}`);
  }
}

const account = new BankAccount("Rohit", 5000);
account.checkBalance();
account.deposit(2000);
account.withdraw(1500);
account.withdraw(10000); // insufficient
account.checkBalance();
