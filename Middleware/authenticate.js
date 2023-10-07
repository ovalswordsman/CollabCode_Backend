const jwt = require("jsonwebtoken");
const User = require("../Model/User");

const notAuthenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.JSON_SECRET_KEY, (err) => {
    if (err) {
      // Token verification failed
      // Redirect to the login page in case of unauthorized access
      return res.redirect("/");
    }

  
    // Continue with the next middleware or route handler
    next();
  });
};

module.exports = notAuthenticate;
