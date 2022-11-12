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

axios
  .post(
    "http://www.jeonjuits.go.kr/atms/selectTbPrltCtlr.do",
    {
      "locale": "ko-kr",
      "keyword": "",
    },
    {
      headers: {
        "Accept": "http://www.jeonjuits.go.kr/atms/selectTrafVrtxList.do",
        "Accept-Language": "ko,en;q=0.9,en-US;q=0.8",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "http://www.jeonjuits.go.kr",
        "Referer": "http://www.jeonjuits.go.kr/its/traffic1.view",
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  )
  .then((response) => {
    var num = [];
    for(i=0;i<response.data.resultList.length;i++){
      if(response.data.resultList[i].WHOLE_RMND_PRZN_NUM===undefined){
        num[i] = 'IS NULL';
      }
      else {
        num[i] = response.data.resultList[i].WHOLE_RMND_PRZN_NUM;
      }
    }
    /*for(i=0;i<num.length;i++){
      console.log(num[i])
    }*/
    exports.updateParking = catchAsync(
        async (req, res, next) => {
          for(i=1;i<num.length;i++) {
            await pool.getConnection((err, conn) => {
              if (err) throw err;
              let sql = 'update parking set WHOLE_RMND_PRZN_NUM = ' + mysql.escape(num[i-1]) + ' where parkUuid= ' + mysql.escape(i) + ';';
              conn.query(sql, (err, rows, fields) => {
                if (err) {
                  console.log(err)
                }
                console.log(rows);
              });
              conn.release();
            });
          }
        }
      );
      setInterval(this.updateParking,5000);
        /*setInterval(this.getAllParkingData,5000);*/
})
 .catch((error) => {
   console.log(error);
});