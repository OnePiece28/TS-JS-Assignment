const mysql = require("mysql2/promise");

// Change user/password to match your MySQL setup
const config = {
  host: "localhost",
  user: "root",
  password: "Password",
  database: "college"
};

async function connectDB() {
  try {
    const connection = await mysql.createConnection(config);
    console.log("✅ Connected to MySQL database 'college' successfully");
    return connection;
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
