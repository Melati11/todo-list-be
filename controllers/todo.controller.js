const verifyToken = require('../middleware/auth');
const Todo = require('../models/todo');
const User = require('../models/user');

module.exports = {
    createTodo: async (req, res) => {
        let data = req.body

        await Todo.create(data)

        if (verifyToken !== User.id) {
            return res.status(400).json({
                message: "invalid token or user"
            })
        }
        
        res.json({
            message: "to do list",
            data,
        })
    },

   getAllTodo: async (req, res) => {
    const user = req.user.id;

    const todos = await Todo.find({userID: user}).populate("userID", ["_id", "name"])

    res.json({
        message: "Successfully obtained todo data",
        data: todos
    })
   },

   getTodoById: async (req, res) => {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);

      if (!todo) {
        return res.status(400).json({
          message: "undefined todo",
          data: null,
        });
      }
  
      res.status(200).json({
        message: "get todo succes",
        data: todo,
      });
   },

   editTodo: async(req, res) => {
    const todoId = req.params.id;
    const data = req.body;
    
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, data, {new: true,})

    if (!updatedTodo) {
        res.status(400).json({
            message: "undefined todo",
            data: null
        })
    }

    res.json({
        message: "update todo success",
        data: updatedTodo
    })
  },

  deleteTodoById: async(req, res) => {
    const todoId = req.params.id;

    const todo = await Todo.findByIdAndDelete(todoId)

    if(!todo) {
        return res.status(400).json({
            message: "undefined todo",
            data: null
        })
    }

    res.status(200).json({
        message: "delete todo success",
        data: todo,
    })
  },

  deleteAllTodo: async(req, res) => {
    const userId = req.user.id;

    const todo = await Todo.deleteMany({
        userID: userId,
    });

    res.json({
        message: "delete all todo",
        data: todo,
    })
  }

}