// Q4. Practical Application of Map, Filter and Reduce
let students = [
  { name: "Amit", marks: 75 },
  { name: "Priya", marks: 90 },
  { name: "Rahul", marks: 45 },
  { name: "Sneha", marks: 80 }
];

let passedStudents = students.filter(s => s.marks > 60);
let names = passedStudents.map(s => s.name);
let average = students.reduce((total, s) => total + s.marks, 0) / students.length;

console.log("Students who scored more than 60:", names);
console.log("Average marks:", average);
