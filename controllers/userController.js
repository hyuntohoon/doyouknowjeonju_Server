const mysql = require("mysql");
const joi = require("joi");
const config = require("../cnf");
const catchAsync = require("../utils/catchAsync");
const bodyParser = require("body-parser");

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
      //let userUuid = req.body.uuid; // auto increment !!
      let userUuid = 3;
      let userId = req.body.userId;
      let userPw = req.body.userPw;
      let userName = req.body.userName;
      let userPhone = req.body.userPhone;
      let sql = `insert into user(userUuid, userId, userPw, userName, userPhone) values (?, ?, ?, ?, ?);`;
      conn.query(
        sql,
        [
          userUuid,
          userId,
          userPw,
          userName,
          userPhone,
        ],
        (err, rows) => {
          if (err) throw err;
          res.send(rows);
        }
      );
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
      let sql = `select * from user where userId = ${id}`; // 추가하기
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
/*
exports.deleteUser = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let id = req.params.id;
      let sql = `DELETE FROM user WHERE userId = ${id}`; // 추가하기
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
*/
