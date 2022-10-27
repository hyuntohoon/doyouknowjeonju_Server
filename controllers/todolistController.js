var express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser')
const cnf = require('../cnf').SQLpool;

var app = express()
app.use(express.json())

const pool = mysql.createPool({
    connectionLimit:cnf.connectionLimit,
    host:cnf.host,
    user:cnf.user,
    password:cnf.password,
    database:cnf.database
})
/*
exports.getAllhospital = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "select * from hospital";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};
*/
exports.getTodolist = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
      });
        let sql = "select * from todolist";
        conn.query(sql, (err, rows) => {
            if(err) {
                return fail(err);
            }
            conn.release();
            done(rows);
        });
    }
);

exports.insertTodolist = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
      });
      let string = req.body.string;
      let userId = req.body.userId; // 쿠기나 세션 혹은 jwt?로 ID 가져와야 해서 바꿔야할듯 
      let sql = `insert into todolist(string, userId) values('${string}', '${userId}')`;
      conn.query(sql, (err, rows) => {
        if (err) {
          return fail(err);
        }
        conn.release();
        console.log(done(rows));
      });
    }
  );

  exports.updateTodolist = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
      });
      let check = req.body.check;
      let string = req.body.string;
      let userId = req.body.userId; // 쿠기나 세션 혹은 jwt?로 ID 가져와야 해서 바꿔야할듯
      let sql = `update todolist set string = '${string}' where userId = '${userId}' and isCheck = ${check}`;
      conn.query(sql, (err, rows) => {
        if (err) {
          return fail(err);
        }
        conn.release();
        console.log(done(rows));
      });
    }
  );

  exports.deleteTodolist = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
      });
      let check = req.body.check;
      let string = req.body.string;
      let userId = req.body.userId; // 쿠기나 세션 혹은 jwt?로 ID 가져와야 해서 바꿔야할듯
      let sql = `delete from todolist where userId ='${userId}' and isCheck = ${check}`;
      conn.query(sql, (err, rows) => {
        if (err) {
          return fail(err);
        }
        conn.release();
        console.log(done(rows));
      });
    }
  );