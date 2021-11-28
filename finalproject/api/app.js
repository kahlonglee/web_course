require("dotenv").config();
const expressLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT;

// connection to the database
require("./config/db.config");
const express = require("express");
const { User, Student } = require("./src/models/index");
const app = express();
const { useLogin, useRegister, useProduct, useHome } = require("./src/routes");

// set template engine
require("ejs");
app.use(expressLayouts);
app.set("views", "./src/views");
app.set("view engine", "ejs");

// bodyparser - to get data from req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

// allow access to XMLHttpRequest
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// routes management
app.use("/", useLogin.Router);
app.use("/", useRegister.Router);
app.use("/", useProduct.Router);
app.use("/", useHome.Router);

app.listen(PORT, (err, res) => {
  if (err) throw err;
  console.log(`Server accessible via http://localhost:${PORT}`);
});
