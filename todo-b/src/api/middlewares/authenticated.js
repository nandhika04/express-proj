const auth = (req, res, next) => {
  if (req.query.admin === "true") {
    next();
  } else {
    res.send("No auth");
  }
};

module.exports = auth;
