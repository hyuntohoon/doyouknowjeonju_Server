const express = require("express");
const bookmarkController = require("./../controllers/bookmarkController");
const mysql = require("mysql");
const router = express.Router();

router
  .route("/")
  .get(bookmarkController.getAllBookmark);

module.exports = router;
