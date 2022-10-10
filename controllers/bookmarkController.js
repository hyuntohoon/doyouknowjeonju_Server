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

// exports.getAllBookmark = catchAsync(
//   async (req, res, next) => {
//     res.status(200).json({
//       stauts: "succes",
//       data: "hi",
//     });
//   }
// );

exports.createBookmark = catchAsync(
  async (req, res, next) => {
    (fail, done) => {
      pool.getConnection((err, conn) => {
        if (err) return fail(err);
      });
      let hospitalName = req.body.hospitalName;
      let hospitalAdress =
        req.body.hospitalAdress;
      let sql =
        "ALTER TABLE bookmark ADD COLUMN "; //
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

exports.getBookmark = catchAsync(
  async (req, res, next) => {
    (fail, done) => {
      pool.getConnection((err, conn) => {
        if (err) {
          return fail(err);
        }
        let userId = req.body.UserId; // get userId;
        let sql = `select ${userId} from bookmark`;
        conn.query(sql, (err, rows) => {
          if (err) {
            return fail(err);
          }
          conn.release();
          done(rows);
        });
      });
    };
  }
);

exports.deleteBookmark = catchAsync(
  async (req, res, next) => {
    (fail, done) => {
      pool.getConnection((err, conn) => {
        if (err) {
          return fail(err);
        }
        let userId = req.body.UserId; // get userId;
        let sql = `DELETE FROM bookmark WHERE userId = '${userId}'`;
        conn.query(sql, (err, rows) => {
          if (err) {
            return fail(err);
          }
          conn.release();
          done(rows);
        });
      });
    };
  }
);
