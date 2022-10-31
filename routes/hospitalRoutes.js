const express = require("express");
const mysql = require("mysql");
const hospitalController = require("./../controllers/hospitalController");
const router = express.Router();
//모든 병원 데이터
router
  .route("/")
  .get(hospitalController.getAllHospital);

//내과
router
  .route("/get_10000000")
  .get(hospitalController.getAllHospital10000000);
//신경과
router
  .route("/get_01000000")
  .get(hospitalController.getAllHospital01000000);
//정신과
router
  .route("/get_00100000")
  .get(hospitalController.getAllHospital00100000);
//외과
router
  .route("/get_00010000")
  .get(hospitalController.getAllHospital00010000);
//안과
router
  .route("/get_00001000")
  .get(hospitalController.getAllHospital00001000);
//치과
router
  .route("/get_00000100")
  .get(hospitalController.getAllHospital00000100);
//이비인후과
router
  .route("/get_00000010")
  .get(hospitalController.getAllHospital00000010);
//산부인과
router
  .route("/get_00000001")
  .get(hospitalController.getAllHospital00000001);

//원하는 병원 데이터
router
  .route("/:name")
  .get(hospitalController.getHospital);
module.exports = router;
