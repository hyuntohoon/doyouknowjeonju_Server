var express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser')
const cnf = require('../cnf').SQLpool;
const catchAsync = require("../utils/catchAsync");
var app = express()
app.use(express.json())

const pool = mysql.createPool({
    connectionLimit:cnf.connectionLimit,
    host:cnf.host,
    user:cnf.user,
    password:cnf.password,
    database:cnf.database
})
exports.searchAllTodolist = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql = "select * from todolist";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);

exports.insertTodolist = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let string = req.params.string;
      let userId = req.params.userId; // 쿠기나 세션 혹은 jwt?로 ID 가져와야 해서 바꿔야할듯
      let sql = `insert into todolist(string, userId) values(?, ?)`;
      conn.query(sql, [string, userId], (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
exports.updateTodolist = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let isCheck = req.body.check;
      let userId = req.params.userId; // 쿠기나 세션 혹은 jwt?로 ID 가져와야 해서 바꿔야할듯
      let sql = `update todolist set string = ? where userId = ? and isCheck = ?`;
      conn.query(sql, [isCheck, userId], (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);

exports.deleteTodolist = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let isCheck = req.body.check;
      let userId = req.params.userId; // 쿠기나 세션 혹은 jwt?로 ID 가져와야 해서 바꿔야할듯
      let sql = `delete from todolist where userId = ? and isCheck = ?`;
      conn.query(sql, [isCheck, userId], (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);