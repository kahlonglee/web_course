const mongoose = require("mongoose");
const { Schema } = mongoose;

const Product = new Schema(
  {
    productID: String,
    productName: String,
    price: Number,
    // image: {
    //   data: Buffer,
    //   contentType: String,
    // },
    createdDate: { type: Date, default: Date.now },
  },
  { collection: "product" }
);

module.exports = mongoose.model("Product", Product);
