const mysql = require("mysql");
var bodyParser = require("body-parser");
const cnf = require("../cnf").SQLpool;
const catchAsync = require("../utils/catchAsync");

const pool = mysql.createPool({
  connectionLimit: cnf.connectionLimit,
  host: cnf.host,
  user: cnf.user,
  password: cnf.password,
  database: cnf.database,
});

exports.getAllParking = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql = "select * from parking";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);

exports.getParking = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let name = req.params.name;
      let data = "%" + name + "%";
      let sql =
        "select * from parking where parkName LIKE ?";
      conn.query(sql, [data], (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
