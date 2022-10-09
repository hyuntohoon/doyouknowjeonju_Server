const express = require("express");
const userController = require("./../controllers/userController");
const db = require("../config");

const router = express.Router();

module.exports = router;

router.post("/signup", userController.signup);

module.exports = router;
