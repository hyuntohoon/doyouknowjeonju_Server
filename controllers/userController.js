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

exports.signup = catchAsync(
  async (req, res, next) => {
    const aa = await req.body;
    console.log(aa);
    res.wirte(aa);

    res.state(201).json({
      status: "succes",
      data: {
        aa: aa,
      },
    });
  }
);
