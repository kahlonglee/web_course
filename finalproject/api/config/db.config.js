require("dotenv").config();
const moongose = require("mongoose");

moongose.connect(process.env.URL, (err) => {
  if (err) throw err;
  console.log("DB connected!");
});
