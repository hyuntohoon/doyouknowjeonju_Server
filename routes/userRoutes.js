const express = require("express");
const userController = require("./../controllers/userController");
const db = require("../config");

const router = express.Router();

module.exports = router;

router.post("/signup", userController.singup);

module.exports = router;
