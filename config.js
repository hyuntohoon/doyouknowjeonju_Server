const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 8000,
  database: "dbs",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connet");
  db.query(
    "CREATE DATABASE express_db",
    (err, result) => {
      if (err) throw err;
      console.log("database created");
    }
  );
});

module.exports = db;
