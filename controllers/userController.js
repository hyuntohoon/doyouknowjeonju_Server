const mysql = require("mysql");
const joi = require("joi");

const config = require("../config");
const catchAsync = require("../utils/catchAsync");

const pool = mysql.createPool({
  connectionLimit: config.SQLpool.connectionLimit,
  host: config.SQLpool.host,
  user: config.SQLpool.user,
  password: config.SQLpool.password,
  database: config.SQLpool.database,
});

exports.singup = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) throw err;
      let userUuid = req.body.uuid; // auto increment !!
      let userId = req.body.id;
      let userPw = req.body.pw;
      let userName = req.body.name;
      let userPhone = req.body.phoneNumber;
      let sql = `INSERT INTO user ('userUuid', 'userId', 'userPw', 'userName', 'userPhone') VALUES ('${userUuid}, '${userId}','${userPw}','${userName}','${userPhone}');`;
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);

//INSERT INTO user values ('${userUuid},${userId}','${userPw}','${userName}','${userPhone}');
exports.getUser = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let id = req.params.id;
      console.log(id);
      let sql = `select * from user where userUuid = ${id}`; // 추가하기
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
exports.deleteUser = catchAsync(
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
