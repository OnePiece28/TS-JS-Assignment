// Automated test of all five operations with sample records
const connectDB = require("./db");
const { insertStudent, showAllStudents, searchStudent, updateStudent, deleteStudent } = require("./students");

async function main() {
  const conn = await connectDB();

  console.log("\n--- 1. INSERT ---");
  const id1 = await insertStudent(conn, { name: "Rahul Sharma", age: 21, course: "Computer Science", email: "rahul@example.com" });
  const id2 = await insertStudent(conn, { name: "Priya Patil", age: 20, course: "Information Technology", email: "priya@example.com" });
  await insertStudent(conn, { name: "Amit Verma", age: 22, course: "Electronics", email: "amit@example.com" });

  console.log("\n--- 2. SHOW ALL ---");
  await showAllStudents(conn);

  console.log("\n--- 3. SEARCH ---");
  await searchStudent(conn, id1);        // by ID
  await searchStudent(conn, "Priya");    // by name

  console.log("\n--- 4. UPDATE ---");
  await updateStudent(conn, id2, { course: "Data Science", age: 21 });
  await searchStudent(conn, id2);

  console.log("\n--- 5. DELETE ---");
  await deleteStudent(conn, id1);
  await showAllStudents(conn);

  await conn.end();
}

main();
