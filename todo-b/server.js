
// //Using express
// const express = require('express');
// const cors = require('cors')
// const mongoose = require('mongoose');

// //Create an instance of express
// const app = express();
// app.use(express.json());
// app.use(cors())

// // let todos = [];
// // let currentId = 1; // starts from 1

// mongoose.connect('mongodb://localhost:27017/todoapp')
// .then( ()=> {
//   console.log("connected to mongodb");
// })
// .catch((err) => {
//   console.log("erro")
// })

// app.post('/todos', async(req, res) => {
//   const { title, description } = req.body;

//   try{
// const newTodo= new todoModel({title,description}); 
// await newTodo.save();
// res.status(201).json(newTodo);
  
//   }
//   catch(error){
//  console.log(error);
//  res.status(500);
// }

// });

// //get all items
// app.get('/todos',async(req,res) => {
//   try{
//     const todos = await todoModel.find();
//     res.json(todos);
//   }
//   catch(error){
//     console.log(error)
//     res.status(500).json({message: error.message});
//   }
// })

// //Update
// app.put("/todos/:id", async(req, res) => {
//   try{
//    const { title, description } = req.body;
//    const id = req.params.id;
//    const updatedTodo =await  todoModel.findByIdAndUpdate(
//     id,
//     {title, description},
//     {new:true}
//    )
//    if(!updatedTodo){
//     return res.status(404).json({ message: "Todo not found"})
//    }
//    res.json(updatedTodo)
//   }
//   catch(error){
//      console.log(error)
//     res.status(500).json({message: error.message});
//   }
// })

// //delete
// app.delete('/todos/:id', async(req,res) => {
//   try{
//  const id=req.params.id;
//   await todoModel.findByIdAndDelete(id);
//   res.status(204).end();
// }
// catch(error){
//     console.log(error)
//     res.status(500).json({message: error.message});
// }
 
// })

// const port = 8000;
// app.listen(port, () => {
//   console.log("Server listening to port " + port);
// });


// const express = require("express");
// const cors = require("cors")
// const mongoose = require('mongoose');
// const { getTodos } = require("./controller/todoController");
// const { createTodo } = require("./controller/todoController");
// const { deleteTodo } = require("./controller/todoController");
// const { updateTodo } = require("./controller/todoController");
// const { auth } = require("./controller/todoController");


// const app = express();
// app.use(express.json())
// app.use(cors());

// app.use(logger);

// mongoose.connect('mongodb://localhost:27017/todoapp')
// .then(() =>{
//   console.log("connected");
// }).catch(() => {
//   console.log("error");
// })


// app.get('/todos', auth,  getTodos)
// app.post('/todos', createTodo)
// app.delete('/todos/:id', deleteTodo)
// app.put('/todos/:id', updateTodo)

// function logger(req, res, next) {
//  console.log('Log');
//  next()
  
// }

// const port = 8000;
// app.listen(port, () => {
//    console.log("server listening to port:"+ port);
// })
