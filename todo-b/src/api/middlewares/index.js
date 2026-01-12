const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verifytoken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Missing token" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
     console.log("JWT ERROR:", error.message);
  return res.status(403).json({ message: error.message });
    //return res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = verifytoken;
