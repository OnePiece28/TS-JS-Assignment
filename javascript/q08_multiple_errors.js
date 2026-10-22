// Q8. Multiple User-Defined Errors
class InvalidAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAmountError";
  }
}

class InsufficientBalanceError extends Error {
  constructor(message) {
    super(message);
    this.name = "InsufficientBalanceError";
  }
}

function withdraw(balance, amount) {
  if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
    throw new InvalidAmountError("Withdrawal amount must be greater than 0");
  }
  if (amount > balance) {
    throw new InsufficientBalanceError("Amount exceeds the available balance");
  }
  return balance - amount;
}

function tryWithdraw(balance, amount) {
  try {
    const newBalance = withdraw(balance, amount);
    console.log(`Withdrawal of ${amount} successful. Remaining balance: ${newBalance}`);
  } catch (error) {
    if (error instanceof InvalidAmountError) {
      console.log("Invalid Amount Error:", error.message);
    } else if (error instanceof InsufficientBalanceError) {
      console.log("Insufficient Balance Error:", error.message);
    } else {
      console.log("Unexpected error:", error.message);
    }
  }
}

tryWithdraw(5000, 2000);   // success
tryWithdraw(5000, -100);   // invalid amount
tryWithdraw(5000, 9000);   // insufficient balance
