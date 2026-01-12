require("dotenv").config()
const express = require("express");
const cors = require("cors")
require("./api/models/todoModel");
const connectDB = require("./api/config/db");
const userRoutes = require("./api/routes/userRouts");
const errorHandler = require("./api/middlewares/errorHandler");
const logger = require("./api/middlewares/logger");

const app = express();
app.use(express.json())
app.use(cors());
app.use(logger);

app.use("/api", userRoutes);

app.use((req, res, next) => {
  const err = new Error("Cannot find the url");
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});

app.use(errorHandler);

const startServer = async () => {
    console.log("MONGO_URI =", process.env.MONGO_URI);
    console.log("SECRET_KEY:", process.env.SECRET_KEY);
    await connectDB();
    const port = process.env.PORT || 5000;
app.listen(port, () => {
   console.log("server listening to port:"+ port);
})
    
}

startServer();
