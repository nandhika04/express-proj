const Todo = require("../models/todoModel");
const { createTodoSchema, updateTodoSchema } = require("../validations/validation");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const createTodo = async(req, res) => {
 
  try {
    const validateddata = createTodoSchema.parse(req.body)
    const todo = new Todo(validateddata)
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const deleteTodo = async(req,res) => {
  try{
 const id=req.params.id;
  await Todo.findByIdAndDelete(id);
  res.status(204).end();
// res.json(deleteTodo);
}
catch(error){
    console.log(error)
    res.status(500).json({message: error.message});
}
}

const updateTodo = async(req, res) => {
  try{
   const validatedData = updateTodoSchema.parse(req.body);
   const id = req.params.id;
   const updatedTodo =await Todo.findByIdAndUpdate(
    id,
    validatedData,
    {new:true}
   )
   if(!updatedTodo){
    return res.status(404).json({ message: "Todo not found"})
   }
   res.json(updatedTodo)
  }
  catch(error){
     console.log(error)
    res.status(500).json({message: error.message});
  }
}

module.exports = { getTodos, createTodo, deleteTodo, updateTodo, auth };

