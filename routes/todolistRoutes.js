const express = require("express");
const todolistController = require("./../controllers/todolistController");

const router = express.Router();

module.exports = router;

router
  .route("/")
  .get(todolistController.searchAllTodolist)

router
    .route("/:userId")
    .get(todolistController.insertTodolist)

router
    .route("/:userId")
    .get(todolistController.updateTodolist)

router
    .route("/:userId")
    .get(todolistController.deleteTodolist)