const express = require("express");
const mysql = require("mysql");
const parkingController = require("./../controllers/parkingController");
const router = express.Router();

router
  .route('/')
  .get(parkingController.searchAllparking);

router
  .route('/:name')
  .get(parkingController.searchOneparking);
module.exports = router;
