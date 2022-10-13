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

/*
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
*/

exports.singup = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
    });
    let id = req.body.id;
    let pw = req.body.pw;
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber;
    let sql = "ALTER TABLE user ADD COLUMN "; // 추가하기
    conn.query(sql, (err, rows) => {
      if (err) {
        return fail(err);
      }
      conn.release();
      console.log(done(rows));
    });
  }
);

exports.getUser = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
    });
    let id = req.body.id;
    let sql = `select ${id} from user`; // 추가하기
    conn.query(sql, (err, rows) => {
      if (err) {
        return fail(err);
      }
      conn.release();
      done(rows);
    });
  }
);

exports.deleteUser = catchAsync(
  // 아직 안 해도 됨
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
    });
    let id = req.body.id;
    let sql = `DELETE FROM user WHERE userId = '${id}'`; // 추가하기
    conn.query(sql, (err, rows) => {
      if (err) {
        return fail(err);
      }
      conn.release();
      done(rows);
    });
  }
);
