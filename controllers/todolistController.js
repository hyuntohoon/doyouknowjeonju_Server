var express = require("express");
const mysql = require("mysql");
var bodyParser = require("body-parser");
const cnf = require("../cnf").SQLpool;
const catchAsync = require("../utils/catchAsync");
var app = express();
app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: cnf.connectionLimit,
  host: cnf.host,
  user: cnf.user,
  password: cnf.password,
  database: cnf.database,
});
exports.getAllTodolist = catchAsync(
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

exports.getTodolist = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let userId = req.params.userId;
      let sql =
        "select * from todolist where userId = ?";
      conn.query(sql, [userId], (err, rows) => {
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
      let string = req.body.string;
      let userId = req.body.userId; // 쿠기나 세션 혹은 jwt?로 ID 가져와야 해서 바꿔야할듯
      let sql = `insert into todolist(string, userId) values(?, ?)`;
      conn.query(
        sql,
        [string, userId],
        (err, rows) => {
          if (err) throw err;
          res.send(rows);
        }
      );
      conn.release();
    });
  }
);
exports.updateTodolist = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let string = req.body.string;
      let isCheck = req.body.check;
      let userId = req.params.userId; // 쿠기나 세션 혹은 jwt?로 ID 가져와야 해서 바꿔야할듯
      let sql = `update todolist set string = ? where userId = ? and isCheck = ?`;
      conn.query(
        sql,
        [string, userId, isCheck],
        (err, rows) => {
          if (err) throw err;
          res.send(rows);
        }
      );
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
      conn.query(
        sql,
        [userId, isCheck],
        (err, rows) => {
          if (err) throw err;
          res.send(rows);
        }
      );
      conn.release();
    });
  }
);
