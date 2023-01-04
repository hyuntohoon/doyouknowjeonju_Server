const mysql = require("mysql");
var bodyParser = require("body-parser");
const cnf = require("../cnf").SQLpool;
const catchAsync = require("../utils/catchAsync");
const axios = require("axios");

const pool = mysql.createPool({
  connectionLimit: cnf.connectionLimit,
  host: cnf.host,
  user: cnf.user,
  password: cnf.password,
  database: cnf.database,
});
exports.getShortPath = catchAsync(async (req, res, next) => {
  //let lat = req.params.lat;
  //let lng = req.params.lng;
  await pool.getConnection((err, conn) => {
    if (err) throw err;
    // 로그인 확인
    // bookmark 정보 보내기
    let userId = 0;
    console.log(userId);
    let sql = `select * from bookmark where userId = "${userId}";`;
    conn.query(sql, (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
    conn.release();
    /*
  await pool.getConnection((err, conn) => {
    let userId = "0";
    let sql = `select * from bookmark where userId = "${userId}";`;
    conn.query(sql, (err, rows) => {
      if (err) throw err;
      console.log(rows);
    });
    conn.release();
    /*
    let path = axios.get(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248ec5e812c5b3044c7997345c8e251f1d3&start=127.0806498,35.86442664&end=127.1278535,35.80087761`,
      {
        headers: {
          Accept:
            "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
        },
      }
    );*/
  });
  //console.log(path);
});
