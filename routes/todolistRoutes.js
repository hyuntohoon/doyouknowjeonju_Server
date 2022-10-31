const express = require("express");
const todolistController = require("./../controllers/todolistController");
const router = express();

router.use(express.json());

module.exports = router;

router
  .route("/")
  .get(todolistController.getsearchAllTodolist);

router
  .route("/:userId")
  .get(todolistController.getsearchOneTodolist)
  .post(todolistController.insertTodolist)
  .put(todolistController.updateTodolist)
  .delete(todolistController.deleteTodolist);
