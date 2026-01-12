const logger = (req, res, next) => {
  console.log({
    protocol: req.protocol,
    method: req.method,
    body: req.body,
    requestedBy: req.user?.email || "Guest",
  });

  next();
};

module.exports = logger;
