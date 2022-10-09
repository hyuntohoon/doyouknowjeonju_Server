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

exports.getAllBookmark = catchAsync(
  async (req, res, next) => {
    res.status(200).json({
      stauts: "succes",
      data: "hi",
    });
  }
);
