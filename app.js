const express = require("express");
const app = express();
const User = require("./Model/User");
const jwt = require("jsonwebtoken");
const notAuthenticate = require("./Middleware/notAuthenticate");
const authenticate = require("./Middleware/authenticate");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connecting database
const connectDB = require("./mongoDB/connectDB");

connectDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type,Authorization");
  // res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.set("trust proxy", 1);

app.post("/register", notAuthenticate, async (req, res) => {
  try {
    var oldUser = await User.findOne({ email: req.body.email });

    // You can generate a token regardless of whether the user exists or not
    let token = jwt.sign(
      { email: req.body.email, name: req.body.name },
      process.env.JSON_SECRET_KEY
    );

    if (!oldUser) {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        picture: req.body.picture,
      });
    }

    res
      .json({ token: token, name: req.body.name, email: req.body.email, picture:req.body.picture })
      .status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get("/login", authenticate, (req, res) => {
  res.status(201);
});



app.listen(8080, () => {
  console.log(`Server Started`);
});
