const mysql = require("mysql");
const cnf = require("../cnf").SQLpool;
const catchAsync = require("../utils/catchAsync");

const pool = mysql.createPool({
  connectionLimit: cnf.connectionLimit,
  host: cnf.host,
  user: cnf.user,
  password: cnf.password,
  database: cnf.database,
});

exports.getAllparking = (fail, done) => {
  pool.getConnection((err, conn) => {
    if (err) {
      return fail(err);
    }
    let sql = "select * from parking";
    conn.query(sql, (err, rows) => {
      if (err) {
        return fail(err);
      }
      conn.release();
      done(rows);
    });
  });
};
