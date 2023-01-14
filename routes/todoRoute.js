const express = require('express');

const { home, createTodo, fetchTodos, fetchTodo, updateTodo, deleteTodo,  } = require('../controllers/todoController');

const route = express.Router()

 route.get('/', home);
 route.post('/createTodo', createTodo);
 route.get('/fetchTodos', fetchTodos);
 route.get('/fetchTodo/:id', fetchTodo );
 route.put('/updateTodo/:id', updateTodo );
 route.delete('/deleteTodo/:id',  deleteTodo);

module.exports = {route} 