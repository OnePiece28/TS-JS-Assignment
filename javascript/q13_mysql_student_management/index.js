// Interactive menu-driven Student Management System
const readline = require("readline/promises");
const connectDB = require("./db");
const { insertStudent, showAllStudents, searchStudent, updateStudent, deleteStudent } = require("./students");

async function main() {
  const conn = await connectDB();
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  let running = true;
  while (running) {
    console.log(`
===== Student Management System =====
1. Insert Student
2. Show All Students
3. Search Student (ID or Name)
4. Update Student
5. Delete Student
6. Exit`);
    const choice = (await rl.question("Enter your choice: ")).trim();

    switch (choice) {
      case "1": {
        const name = await rl.question("Name: ");
        const age = parseInt(await rl.question("Age: "), 10);
        const course = await rl.question("Course: ");
        const email = await rl.question("Email: ");
        await insertStudent(conn, { name, age, course, email });
        break;
      }
      case "2":
        await showAllStudents(conn);
        break;
      case "3": {
        const keyword = await rl.question("Enter student ID or name: ");
        await searchStudent(conn, keyword.trim());
        break;
      }
      case "4": {
        const id = parseInt(await rl.question("Student ID to update: "), 10);
        console.log("Press Enter to skip a field you don't want to change.");
        const updates = {};
        const name = await rl.question("New name: ");
        const age = await rl.question("New age: ");
        const course = await rl.question("New course: ");
        const email = await rl.question("New email: ");
        if (name) updates.name = name;
        if (age) updates.age = parseInt(age, 10);
        if (course) updates.course = course;
        if (email) updates.email = email;
        await updateStudent(conn, id, updates);
        break;
      }
      case "5": {
        const id = parseInt(await rl.question("Student ID to delete: "), 10);
        await deleteStudent(conn, id);
        break;
      }
      case "6":
        running = false;
        break;
      default:
        console.log("❌ Invalid choice. Try again.");
    }
  }

  rl.close();
  await conn.end();
  console.log("Goodbye!");
}

main();
