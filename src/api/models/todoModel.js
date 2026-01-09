const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/todoapp')
.then(() =>{
  console.log("connected");
}).catch(() => {
  console.log("error");
})

const todoSchema = new mongoose.Schema({
     title:{ required: true, type: String },
     description: String 
    }) 

const todoModel = mongoose.model('Todo',todoSchema );

module.exports = todoModel;