// Q7. User-Defined Error
class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 18) {
    throw new InvalidAgeError("Age must be 18 or above");
  }
  console.log("Age is valid:", age);
}

try {
  checkAge(25);
  checkAge(15);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
