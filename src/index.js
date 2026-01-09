const express = require("express");
const cors = require("cors")
require("./api/models/todoModel");
const userRoutes = require("./api/routes/userRouts");

const app = express();
app.use(express.json())
app.use(cors());

app.use("/api", userRoutes);

const port = 8000;
app.listen(port, () => {
   console.log("server listening to port:"+ port);
})
