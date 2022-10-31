const mysql = require("mysql");
var bodyParser = require("body-parser");
const cnf = require("../cnf").SQLpool;
const catchAsync = require("../utils/catchAsync");
const { parse } = require("path");
const { stringify } = require("querystring");

const pool = mysql.createPool({
  connectionLimit: cnf.connectionLimit,
  host: cnf.host,
  user: cnf.user,
  password: cnf.password,
  database: cnf.database,
});

//모든 병원
exports.getAllHospital = catchAsync(
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
//병원 하나 검색
exports.getHospital = catchAsync(
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
//내과
exports.getAllHospital10000000 = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql =
        "SELECT * FROM hospital WHERE hosSubject LIKE '1%'";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);

//신경과
exports.getAllHospital01000000 = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql =
        "SELECT * FROM hospital WHERE hosSubject LIKE '_1%'";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
//정신과
exports.getAllHospital00100000 = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql =
        "SELECT * FROM hospital WHERE hosSubject LIKE '__1%'";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
//외과
exports.getAllHospital00010000 = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql =
        "SELECT * FROM hospital WHERE hosSubject LIKE '___1%'";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
//안과
exports.getAllHospital00001000 = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql =
        "SELECT * FROM hospital WHERE hosSubject LIKE '____1%'";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
//치과
exports.getAllHospital00000100 = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql =
        "SELECT * FROM hospital WHERE hosSubject LIKE '_____1%'";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
//이비인후과
exports.getAllHospital00000010 = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql =
        "SELECT * FROM hospital WHERE hosSubject LIKE '______1%'";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
//산부인과
exports.getAllHospital00000001 = catchAsync(
  async (req, res, next) => {
    await pool.getConnection((err, conn) => {
      if (err) return fail(err);
      let sql =
        "SELECT * FROM hospital WHERE hosSubject LIKE '%1'";
      conn.query(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
      });
      conn.release();
    });
  }
);
