const express = require("express");
const router = express.Router();
const verifytoken = require("../middlewares/index");


const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  
} = require("../controllers/todoController");
const auth = require("../middlewares/authenticated");
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/index')

router.get("/todos", auth, getTodos);
router.post("/todos", createTodo);
router.delete("/todos/:id", deleteTodo);
router.put("/todos/:id", updateTodo);

router.post("/user", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post('/authenticate', async(req,res) => {
  try{

      const {email, password} = req.body;

  const user = await User.findOne({email});

  if(!user){
    return res.status(401).json({message: "User not found"});
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    return res.status(401).json({message: "Incorrect Password"});
  }

  const token = generateToken(user);
  res.json({ token });
  }catch (error) {
    return res.status(500).json({ message: error.message });
  }

})

router.get('/data', verifytoken, async(req,res) => {
 res.json({
  message: `welcome, ${req.user.email}! this is protected data`,
});
})

module.exports = router;