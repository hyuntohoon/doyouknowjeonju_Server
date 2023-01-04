const axios = require("axios");
const mysql = require("mysql");
const cnf = require("./cnf").SQLpool;
const catchAsync = require("./utils/catchAsync");

const pool = mysql.createPool({
  connectionLimit: cnf.connectionLimit,
  host: cnf.host,
  user: cnf.user,
  password: cnf.password,
  database: cnf.database,
});

let path = async () => {
  axios
    .get(
      "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248ec5e812c5b3044c7997345c8e251f1d3&start=127.0806498,35.86442664&end=127.1278535,35.80087761",
      {
        headers: {
          Accept:
            "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
        },
      }
    )
    .then(function (response) {
      // 성공 핸들링
      console.log("success!", response);
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log("some errors", error);
    })
};
const A = async () => {
  const B = await path();
};
path();
/*
axios
  .post(
    "http://www.jeonjuits.go.kr/atms/selectTbPrltCtlr.do",
    {
      locale: "ko-kr",
      keyword: "",
    },
    {
      headers: {
        Accept: "http://www.jeonjuits.go.kr/atms/selectTrafVrtxList.do",
        "Accept-Language": "ko,en;q=0.9,en-US;q=0.8",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Origin: "http://www.jeonjuits.go.kr",
        Referer: "http://www.jeonjuits.go.kr/its/traffic1.view",
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  )
  .then((response) => {
    exports.updateParking(() =>
      catchAsync(async (req, res, next) => {
        await pool.getConnection((err, conn) => {
          let num = [];
          for (i = 0; i < response.data.resultList.length; i++) {
            if (response.data.resultList[i].WHOLE_RMND_PRZN_NUM === undefined) {
              num[i] = "NULL";
            } else {
              num[i] = response.data.resultList[i].WHOLE_RMND_PRZN_NUM;
            }
          }
          for (i = 1; i <= num.length; i++) {
            if (err) throw err;
            let sql =
              "update parking set WHOLE_RMND_PRZN_NUM = " +
              mysql.escape(num[i - 1]) +
              " where parkUuid= " +
              mysql.escape(i) +
              ";";
            ``;
            conn.query(sql, (err, rows, fields) => {
              if (err) {
                console.log(err);
              }
              console.log(rows);
            });
          }
          conn.release();
        });
      })
    );
    //setInterval(this.updateParking, 5000);
    //나중에 app.js에서 setInterval 함수 실행시키면 실시간으로 데이터 받아오기 가능
    /*setInterval(this.getAllParkingData,5000);*/
/* })
  .catch((error) => {
    console.log(error);
  });
*/
