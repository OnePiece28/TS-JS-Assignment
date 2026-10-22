// Q2. Object Destructuring
let student = {
  name: "Rahul",
  age: 21,
  city: "Mumbai"
};

let { name, age, city: studentCity, course = "Unknown" } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", studentCity);
console.log("Course:", course);
