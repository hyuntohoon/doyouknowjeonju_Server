const path = require("path");
const config = require("../config");
const mysql = require("mysql");
const catchAsync = require("../utils/catchAsync");
const pool = mysql.createPool({
  connectionLimit: config.SQLpool.connectionLimit,
  host: config.SQLpool.host,
  user: config.SQLpool.user,
  password: config.SQLpool.password,
  database: config.SQLpool.database,
});

exports.createBookmark;
exports.deleteBookmark;

exports.getBookmark = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) throw err;
      let uuid = req.body.uuid;
      let sql = `select * from hospital_10000000 where hos_Uuid = ${uuid};`;
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
