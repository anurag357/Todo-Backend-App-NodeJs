const {Todo} = require('../model/Todo')

//home
const home = (req, res) => {
    res.send("Todo home Page.!");
    
}

//Create todo
const createTodo = async(req, res) => {
    try {
        const todo = await Todo.create( req.body
            // {
            //     title : req.body.title,
            //     description : req.body.description,
            // } 
        );
        res.json(todo); 
    } catch (error) {
        res.json(error);
    }
};

//Fetch todo
const fetchTodos = async(req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.json(error);
    }
}

//Fetch single todos
const fetchTodo = async(req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (error) {
        res.json(error);
    }
}

//Update Todos
const updateTodo = async(req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            title : req.body.title,
            decription : req.body.decription,
        },
        {
            new : true,
            runValidators : true,
        });
        res.json(todo);
    } catch (error) {
        res.json(error);
    } 
}

//Delete Todo
const deleteTodo = async(req, res) => {
    // console.log(req.params.id);
    try {
        const todo = await Todo.findByIdAndRemove(req.params.id);
        res.json(todo);
    } catch (error) {
        res.json(error);
    }    
}

module.exports = {home, createTodo, fetchTodos, fetchTodo, updateTodo, deleteTodo }


