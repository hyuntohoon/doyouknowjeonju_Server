const express = require("express");
const mysql = require("mysql");
const parkingController = require("./../controllers/parkingController");
const router = express.Router();

router
  .route('/')
  .get(parkingController.getsearchAllparking);

router
  .route('/:name')
  .get(parkingController.getsearchOneparking);
module.exports = router;
