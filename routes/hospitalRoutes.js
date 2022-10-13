const express = require("express");
const mysql = require("mysql");
const hospitalController = require("./../controllers/hospitalController");
const router = express.Router();

//모든 병원 데이터 
router.get('/get_All', function(req, res, next) {
    hospitalController.getAllhospital(
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

//진료과목에 내과과 포함되는 병원들
router.get('/get_10000000', function(req, res, next) {
  hospitalController.getAllhospital10000000(
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

//진료과목에 신경과가 포함되는 병원들
router.get('/get_01000000', function(req, res, next) {
  hospitalController.getAllhospital01000000(
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

//진료과목에 정신과가 포함되는 병원들
router.get('/get_00100000', function(req, res, next) {
  hospitalController.getAllhospital00100000(
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

//진료과목에 외과가 포함되는 병원들
router.get('/get_00010000', function(req, res, next) {
  hospitalController.getAllhospital00010000(
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

//진료과목에 안과가 포함되는 병원들
router.get('/get_00001000', function(req, res, next) {
  hospitalController.getAllhospital00001000(
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

//진료과목에 치과가 포함되는 병원들
router.get('/get_00000100', function(req, res, next) {
  hospitalController.getAllhospital00000100(
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

//진료과목에 이비인후과가 포함되는 병원들
router.get('/get_00000010', function(req, res, next) {
  hospitalController.getAllhospital00000010(
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

//진료과목에 산부인과가 포함되는 병원들
router.get('/get_00000001', function(req, res, next) {
  hospitalController.getAllhospital00000001(
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
