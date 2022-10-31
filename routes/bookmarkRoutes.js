const express = require("express");
const bookmarkController = require("./../controllers/bookmarkController");
const mysql = require("mysql");
const router = express.Router();

router
  .route("/")
  .post(bookmarkController.createBookmark);

router
  .route("/:id")
  .get(bookmarkController.getBookmark);

module.exports = router;
