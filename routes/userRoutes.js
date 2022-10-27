const express = require("express");
const userController = require("./../controllers/userController");
const db = require("../config");

const router = express.Router();

module.exports = router;

router.route("/").post(userController.singup);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser);
module.exports = router;
