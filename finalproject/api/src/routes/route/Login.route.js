const express = require("express");
const Router = express.Router();
const { User } = require("../../models/index");

Router.route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post((req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email, password: password })
      .then((user) => {
        if (user) {
          res.redirect("product");
        } else {
          console.log("Something went wrong for the authentication!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = { Router };
