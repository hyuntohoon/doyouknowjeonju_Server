const express = require("express");
const mysql = require("mysql");
const shortPathController = require("./../controllers/shortPathController");
const router = express.Router();

router.route("/:lat/:lng").get(shortPathController.getShortPath);

module.exports = router;
