const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    title :{
        type : 'string',
        required : [true, 'Please title is required'],
    },
    description : {
        type : 'string',
        required : [true, 'Please description is required'],
    },
},
{
    timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo}