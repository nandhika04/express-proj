const Todo = require("../models/todoModel");

const getAllTodos = async () => {
  return await Todo.find();
};

const createTodoService = async (data) => {
  const todo = new Todo(data);
  return await todo.save();
};

const deleteTodoById = async (id) => {
  return await Todo.findByIdAndDelete(id);
};

const updateTodoById = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  getAllTodos,
  createTodoService,
  deleteTodoById,
  updateTodoById
};
