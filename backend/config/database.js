import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.TIDB_HOST,
  port: process.env.TIDB_PORT || 4000,
  user: process.env.TIDB_USER,
  password: process.env.TIDB_PASSWORD,
  database: process.env.TIDB_DATABASE || "qfood",
  ssl: {
    minVersion: "TLSv1.2",
  },
});

db.connect((error) => {
  if (error) {
    console.error("Database connection failed:", error);
    return;
  }

  console.log("Successfully connected to the database.");
});

export default db;