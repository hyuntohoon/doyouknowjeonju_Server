const express = require("express");
const mysql = require("mysql");
const hospitalController = require("./../controllers/hospitalController");
const router = express.Router();
//모든 병원 데이터 
router
  .route('/get_All')
  .get(hospitalController.searchAllhospital);

//내과
router
  .route('/get_10000000')
  .get(hospitalController.allHospital10000000);
//신경과
router
  .route('/get_01000000')
  .get(hospitalController.allHospital01000000);
//정신과
router
  .route('/get_00100000')
  .get(hospitalController.allHospital00100000);
//외과
router
  .route('/get_00010000')
  .get(hospitalController.allHospital00010000);
//안과
router
  .route('/get_00001000')
  .get(hospitalController.allHospital00001000);
//치과
router
  .route('/get_00000100')
  .get(hospitalController.allHospital00000100);
//이비인후과
router
  .route('/get_00000010')
  .get(hospitalController.allHospital00000010);
//산부인과
router
  .route('/get_00000001')
  .get(hospitalController.allHospital00000001);

//원하는 병원 데이터
router
  .route('/:name')
  .get(hospitalController.searchOnehospital)
module.exports = router;
