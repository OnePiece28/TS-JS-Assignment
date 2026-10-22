// Q1. Array Destructuring
let numbers = [10, 20, 30, 40, 50, 60];

let [first, second, third, fourth, ...others] = numbers;
let remaining = [third, ...others]; // everything except 1st, 2nd and 4th

console.log("First:", first);       // 10
console.log("Second:", second);     // 20
console.log("Fourth:", fourth);     // 40
console.log("Remaining:", remaining); // [30, 50, 60]
