const path = require("path");
const config = require("../cnf");
const mysql = require("mysql");
const catchAsync = require("../utils/catchAsync");
const { response } = require("express");
const pool = mysql.createPool({
  connectionLimit: config.SQLpool.connectionLimit,
  host: config.SQLpool.host,
  user: config.SQLpool.user,
  password: config.SQLpool.password,
  database: config.SQLpool.database,
});

exports.createBookmark = catchAsync(async (req, res, next) => {
  await pool.getConnection((err, conn) => {
    if (err) throw err;
    let hosName = req.body.hosName;
    let hosAddress = req.body.hosAddress;
    let userId = req.body.userId;
    let sql = `insert into bookmark(hosName, hosAddress, userId) values (?, ?, ?);`;
    console.log(sql);
    conn.query(sql, [hosName, hosAddress, userId], (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
    conn.release();
  });
});

/*
exports.deleteBookmark = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) throw err;
      let hosName = req.query.hosName;
      let userId = req.params.id;
      let sql = `DELETE FROM bookmark WHRER userId = ${userId} AND hosName = ${hosName};`;
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
*/
exports.getBookmark = catchAsync(async (req, res, next) => {
  await pool.getConnection((err, conn) => {
    if (err) throw err;
    // 로그인 확인
    // bookmark 정보 보내기
    let userId = req.params.id;
    console.log(userId);
    let sql = `select * from bookmark where userId = "${userId}";`;
    conn.query(sql, (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
    conn.release();
  });
});
