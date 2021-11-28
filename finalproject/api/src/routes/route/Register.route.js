const express = require("express");
const { User } = require("../../models/index");
const Router = express.Router();

Router.route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post((req, res) => {
    let errors = [];
    const { name, email, password, password2 } = req.body;

    // check ALL fields
    if (!name || !email || !password || !password2) {
      errors.push({ msg: "All fields required" });
    }

    // check password length
    if (password.length < 6) {
      errors.push({ msg: "Password must be at least 6 characters" });
    }

    // check if password and password matched
    if (password != password2) {
      errors.push({ msg: "Passwords not matching" });
    }

    if (errors.length > 0) {
      res.render("register", {
        errors,
        name,
        email,
        password,
        password2,
      });
    } else {
      User.findOne({ email: email }).then((user) => {
        if (user) {
          errors.push({
            msg: "Email already taken, please use diffrent email",
          });
          res.render("register", {
            errors,
            name,
            email,
            password,
            password2,
          });
        } else {
          const newUser = new User({
            name: name,
            email: email,
            password: password,
          });
          newUser.save();
          res.redirect("login");
        }
      });
    }
  });

module.exports = { Router };
