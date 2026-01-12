const {
  getAllTodos,
  createTodoService,
  deleteTodoById,
  updateTodoById,
} = require("../services/todoService");

const {
  createTodoSchema,
  updateTodoSchema,
} = require("../validations/validation");


const getTodos = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (error) {
     next(error); 
  }
};

const createTodo = async (req, res) => {
  const result = createTodoSchema.safeParse(req.body);

  if (!result.success) {
     return next({
      statusCode: 400,
      status: "fail",
      message: "Validation failed",
      errors: result.error.issues,
    });
   
  }

  try {
    const todo = await createTodoService(result.data);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};


const deleteTodo = async (req, res) => {
  try {
    await deleteTodoById(req.params.id);
    res.status(204).end();
  } catch (error) {
  next(error);
  }
};

const updateTodo = async (req, res) => {
  const result = updateTodoSchema.safeParse(req.body);

  if (!result.success) {
    return next({
      statusCode: 400,
      status: "fail",
      message: "Validation failed",
      errors: result.error.issues,
    });
  }

  try {
    const updatedTodo = await updateTodoById(
      req.params.id,
      result.data
    );

    if (!updatedTodo) {
       return next({
        statusCode: 404,
        status: "fail",
        message: "Todo not found",
      });
    }

    res.json(updatedTodo);
  } catch (error) {
   next(error);
  }
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
