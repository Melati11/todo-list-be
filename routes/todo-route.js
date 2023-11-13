const express = require('express');
const { createTodo, 
        getAllTodo, 
        getTodoById, 
        editTodo, 
        deleteTodoById, 
        deleteAllTodo 
      } = require('../controllers/todo.controller');
const verifyToken = require("../middleware/auth");

const route = express.Router()

route.post("/", verifyToken, createTodo)
route.get("/", verifyToken, getAllTodo)
route.get("/:id",verifyToken, getTodoById)
route.put("/:id",verifyToken, editTodo)
route.delete("/:id",verifyToken, deleteTodoById)
route.post("/delete_all",verifyToken, deleteAllTodo)

module.exports = route;