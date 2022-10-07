const express = require("express");
const mysql = require("mysql");
const hospitalController = require("./../controllers/hospitalController");
const router = express.Router();

router.get('/get_All', function(req, res, next) {
    hospitalController.get_Allhospital(
      (err)=> {
        return next(err);
      },
      (rows)=> {
        if(rows!=" "){
        return res.json({
          isSuccess: true,
          code: 200,
          message: "조회성공",
          data:rows 
        });
      }
      else {
        return res.json({
          isSuccess: false,
          code: 300,
          message: "조회싪패", 
        })
      }
  });
});





module.exports = router;
