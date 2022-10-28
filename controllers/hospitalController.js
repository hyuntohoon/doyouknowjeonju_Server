const mysql = require('mysql');
var bodyParser = require('body-parser')
const cnf = require('../cnf').SQLpool;
const catchAsync = require("../utils/catchAsync");
const { parse } = require('path');
const { stringify } = require('querystring');

const pool = mysql.createPool({
    connectionLimit:cnf.connectionLimit,
    host:cnf.host,
    user:cnf.user,
    password:cnf.password,
    database:cnf.database
})


exports.searchAllhospital = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let sql = "select * from hospital";
        conn.query(sql, (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);

exports.searchOnehospital = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let name = req.params.name;
        let data = "%" + name + "%";
        let sql = `select * from hospital where hosName LIKE ?`;
        conn.query(sql, [data], (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);

exports.allHospital10000000 = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let sql = "SELECT * FROM hospital WHERE hosSubject LIKE '1%'";
        conn.query(sql, (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);


exports.allHospital01000000 = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let sql = "SELECT * FROM hospital WHERE hosSubject LIKE '_1%'";
        conn.query(sql, (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);

exports.allHospital00100000 = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let sql = "SELECT * FROM hospital WHERE hosSubject LIKE '__1%'";
        conn.query(sql, (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);

exports.allHospital00010000 = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let sql = "SELECT * FROM hospital WHERE hosSubject LIKE '___1%'";
        conn.query(sql, (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);

exports.allHospital00001000 = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let sql = "SELECT * FROM hospital WHERE hosSubject LIKE '____1%'";
        conn.query(sql, (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);

exports.allHospital00000100 = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let sql = "SELECT * FROM hospital WHERE hosSubject LIKE '_____1%'";
        conn.query(sql, (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);

exports.allHospital00000010 = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let sql = "SELECT * FROM hospital WHERE hosSubject LIKE '______1%'";
        conn.query(sql, (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);


exports.allHospital00000001 = catchAsync(
    async (req, res, next) => {
      await pool.getConnection((err, conn) => {
        if (err) return fail(err);
        let sql = "SELECT * FROM hospital WHERE hosSubject LIKE '%1'";
        conn.query(sql, (err, rows) => {
          if (err) throw err;
          res.send(rows);
        });
        conn.release();
      });
    }
);