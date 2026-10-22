// Q6. Class Inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, employeeId, salary) {
    super(name, age);
    this.employeeId = employeeId;
    this.salary = salary;
  }

  displayDetails() {
    console.log("Name       :", this.name);
    console.log("Age        :", this.age);
    console.log("Employee ID:", this.employeeId);
    console.log("Salary     :", this.salary);
  }
}

const emp = new Employee("Rohit Gupta", 22, "E101", 40000);
emp.displayDetails();
