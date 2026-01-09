const { z } = require("zod");

const createTodoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const updateTodoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

module.exports = {
  createTodoSchema,
  updateTodoSchema,
};
