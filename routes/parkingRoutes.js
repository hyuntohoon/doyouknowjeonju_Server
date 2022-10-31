const express = require("express");
const mysql = require("mysql");
const parkingController = require("./../controllers/parkingController");
const router = express.Router();

router
  .route("/")
  .get(parkingController.getAllParking);

router
  .route("/:name")
  .get(parkingController.getParking);
module.exports = router;
