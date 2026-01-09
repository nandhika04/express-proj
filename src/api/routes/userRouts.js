const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  auth
} = require("../controllers/todoController");
const auth = require("../middlewares/authenticated");

router.get("/todos", auth, getTodos);
router.post("/todos", createTodo);
router.delete("/todos/:id", deleteTodo);
router.put("/todos/:id", updateTodo);

module.exports = router;