const express = require("express");
const todolistController = require("./../controllers/todolistController");
const router = express();

router.use(express.json());

module.exports = router;

router
    .route('/')
    .get(todolistController.getsearchAllTodolist);

router
    .route('/:userId')
    .get(todolistController.getsearchOneTodolist);

router
    .route('/insert/:userId')
    .post(todolistController.insertTodolist);
    

router
    .route('/update/:userId')
    .post(todolistController.updateTodolist);

router
    .route('/delete/:userId')
    .post(todolistController.deleteTodolist);