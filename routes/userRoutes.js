const express = require("express");
const userController = require("./../controllers/userController");
const db = require("../cnf");

const router = express.Router();

module.exports = router;

router.route("/").post(userController.singup);

router.route("/:id").get(userController.getUser);
module.exports = router;
