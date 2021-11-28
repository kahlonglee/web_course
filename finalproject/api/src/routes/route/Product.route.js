const express = require("express");
const Router = express.Router();
const { Product } = require("../../models/index");
const fs = require("fs");
const path = require("path");
const imgUpload = require("../../services/imgUpload");

Router.route("/product")
  .get((req, res) => {
    res.render("product");
  })
  .post(imgUpload.upload.single("image"), (req, res) => {
    const newProduct = {
      productID: req.body.productID,
      productName: req.body.productName,
      price: req.body.price,
      image: {
        data: fs.readFileSync(
          path.join(__dirname + "../../../public/uploads/" + req.file.filename)
        ),
        contentType: "image / png",
      },
    };
    Product.create(newProduct, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        item.save();
        res.send("Product's information saved!");
      }
    });
  });

Router.route("/Product/:productID").get((req, res) => {
  Product.find({ productID: req.params.productID }, function (error, result) {
    res.send(JSON.stringify(result[0]));
  });
});

Router.route("/Products/All").get((req, res) => {
  Product.find((err, result) => {
    res.send(result);
  });
});

Router.route("/products").post((req, res) => {
  const newProduct = {
    productID: req.body.productID,
    productName: req.body.productName,
    price: req.body.price,
  };
  Product.create(newProduct, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      item.save();
      res.send("Product saved!");
    }
  });
});

module.exports = { Router };
