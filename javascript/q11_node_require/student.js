// Q11. Student Management System - module using module.exports
function displayStudent(student) {
  console.log("----- Student Details -----");
  console.log("ID     :", student.id);
  console.log("Name   :", student.name);
  console.log("Age    :", student.age);
  console.log("Course :", student.course);
  console.log("Email  :", student.email);
}

module.exports = displayStudent;
