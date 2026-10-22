// Q9. Promise using setTimeout() with .then() and .catch()
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task completed successfully");
  }, 2000);
});

myPromise
  .then(message => console.log(message))
  .catch(error => console.log("Error:", error));
