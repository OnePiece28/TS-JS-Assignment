// Q3. Map, Filter and Reduce
let numbers = [2, 5, 8, 10, 15, 20];

let squares = numbers.map(n => n * n);
console.log("Squares:", squares);

let greaterThan20 = squares.filter(n => n > 20);
console.log("Squares greater than 20:", greaterThan20);

let sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum of all numbers:", sum);
