const express = require("express");
const todolistController = require("./../controllers/todolistController");
const router = express();

router.use(express.json());

module.exports = router;

router
  .route("/")
  .get(todolistController.getAllTodolist)
  .post(todolistController.insertTodolist);

router
  .route("/:userId")
  .get(todolistController.getTodolist)
  .put(todolistController.updateTodolist)
  .delete(todolistController.deleteTodolist);
