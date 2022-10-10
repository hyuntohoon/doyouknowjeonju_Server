const config = require("../config");
const mysql = require("mysql");
const catchAsync = require("../utils/catchAsync");
const pool = mysql.createPool({
  connectionLimit: config.connectionLimit,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

exports.singup = catchAsync(
  async (req, res, next) => {
    (fail, done) => {
      pool.getConnection((err, conn) => {
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
        done(rows);
      });
    };
  }
);

exports.getUser = catchAsync(
  async (req, res, next) => {
    (fail, done) => {
      pool.getConnection((err, conn) => {
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
    };
  }
);

exports.deleteUser = catchAsync(
  // 아직 안 해도 됨
  async (req, res, next) => {
    (fail, done) => {
      pool.getConnection((err, conn) => {
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
    };
  }
);
