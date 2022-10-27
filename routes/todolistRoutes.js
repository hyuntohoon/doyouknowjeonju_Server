const express = require("express");
const todolistController = require("./../controllers/todolistController");

const router = express.Router();

module.exports = router;

router.get('/get_All', function(req, res, next) {
    todolistController.getTodolist(
      (err)=> {
        return next(err);
      },
      (rows)=> {
        if(rows!=" "){
        return res.json({
          isSuccess: true,
          code: 200,
          message: "조회성공",
          data:rows 
        });
      }
      else {
        return res.json({
          isSuccess: false,
          code: 300,
          message: "조회싪패", 
        })
      }
  });
});
router
    .route("/insertTodolist")
    .get(todolistController.insertTodolist)
    .post(todolistController.insertTodolist);

router
    .route("/updateTodolist")
    .get(todolistController.updateTodolist)
    .post(todolistController.updateTodolist);

router
    .route("/deleteTodolist")
    .get(todolistController.deleteTodolist)
    .post(todolistController.deleteTodolist);