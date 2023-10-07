const jwt = require("jsonwebtoken");
const User = require("../Model/User");

const notAuthenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.JSON_SECRET_KEY, (e) => {
    if (e) {
      next();
    } else {
      res.redirect("http://localhost:3000/home");
    }
  });
};

module.exports = notAuthenticate;
