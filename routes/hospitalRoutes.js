const express = require("express");
const mysql = require("mysql");
const hospitalController = require("./../controllers/hospitalController");
const router = express.Router();
//모든 병원 데이터
router
  .route("/")
  .get(hospitalController.getsearchAllhospital);

//내과
router
  .route("/get_10000000")
  .get(hospitalController.getallHospital10000000);
//신경과
router
  .route("/get_01000000")
  .get(hospitalController.getallHospital01000000);
//정신과
router
  .route("/get_00100000")
  .get(hospitalController.getallHospital00100000);
//외과
router
  .route("/get_00010000")
  .get(hospitalController.getallHospital00010000);
//안과
router
  .route("/get_00001000")
  .get(hospitalController.getallHospital00001000);
//치과
router
  .route("/get_00000100")
  .get(hospitalController.getallHospital00000100);
//이비인후과
router
  .route("/get_00000010")
  .get(hospitalController.getallHospital00000010);
//산부인과
router
  .route("/get_00000001")
  .get(hospitalController.getallHospital00000001);

//원하는 병원 데이터
router
  .route("/:name")
  .get(hospitalController.getsearchOnehospital);
module.exports = router;
