// All database operations — each in its own function, using parameterized queries

async function insertStudent(conn, { name, age, course, email }) {
  try {
    const sql = "INSERT INTO students (name, age, course, email) VALUES (?, ?, ?, ?)";
    const [result] = await conn.execute(sql, [name, age, course, email]);
    console.log(`✅ Student inserted successfully with ID ${result.insertId}`);
    return result.insertId;
  } catch (err) {
    console.error("❌ Failed to insert student:", err.message);
  }
}

async function showAllStudents(conn) {
  try {
    const [rows] = await conn.execute("SELECT * FROM students");
    if (rows.length === 0) {
      console.log("ℹ️  No student records found");
    } else {
      console.log("✅ All students:");
      console.table(rows);
    }
    return rows;
  } catch (err) {
    console.error("❌ Failed to fetch students:", err.message);
  }
}

async function searchStudent(conn, keyword) {
  try {
    // Search by exact ID or by (partial) name
    const sql = "SELECT * FROM students WHERE id = ? OR name LIKE ?";
    const id = Number(keyword) || 0;
    const [rows] = await conn.execute(sql, [id, `%${keyword}%`]);
    if (rows.length === 0) {
      console.log(`ℹ️  No student found for '${keyword}'`);
    } else {
      console.log(`✅ Search results for '${keyword}':`);
      console.table(rows);
    }
    return rows;
  } catch (err) {
    console.error("❌ Search failed:", err.message);
  }
}

async function updateStudent(conn, id, updates) {
  try {
    const allowed = ["name", "age", "course", "email"];
    const fields = Object.keys(updates).filter(f => allowed.includes(f));
    if (fields.length === 0) {
      console.log("ℹ️  Nothing to update");
      return;
    }
    const setClause = fields.map(f => `${f} = ?`).join(", ");
    const values = fields.map(f => updates[f]);
    const [result] = await conn.execute(
      `UPDATE students SET ${setClause} WHERE id = ?`,
      [...values, id]
    );
    if (result.affectedRows === 0) {
      console.log(`❌ No student found with ID ${id}`);
    } else {
      console.log(`✅ Student with ID ${id} updated successfully`);
    }
  } catch (err) {
    console.error("❌ Failed to update student:", err.message);
  }
}

async function deleteStudent(conn, id) {
  try {
    const [result] = await conn.execute("DELETE FROM students WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      console.log(`❌ No student found with ID ${id}`);
    } else {
      console.log(`✅ Student with ID ${id} deleted successfully`);
    }
  } catch (err) {
    console.error("❌ Failed to delete student:", err.message);
  }
}

module.exports = { insertStudent, showAllStudents, searchStudent, updateStudent, deleteStudent };
