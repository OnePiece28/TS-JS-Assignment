// Q10. Promise using resolve() and reject()
function checkNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0) {
        resolve("Positive number");
      } else {
        reject("Invalid number");
      }
    }, 2000);
  });
}

checkNumber(5)
  .then(result => console.log("checkNumber(5):", result))
  .catch(error => console.log("checkNumber(5):", error));

checkNumber(-3)
  .then(result => console.log("checkNumber(-3):", result))
  .catch(error => console.log("checkNumber(-3):", error));
