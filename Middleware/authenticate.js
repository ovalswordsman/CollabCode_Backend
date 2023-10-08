const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  jwt.verify(token, process.env.JSON_SECRET_KEY, (err) => {
    if (err) {
      // Token verification failed
      // Send a JSON response indicating the authentication status
      res.status(500);
    } else {
      // Continue with the next middleware or route handler
      next();
    }
  });
};

module.exports = authenticate;
