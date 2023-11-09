const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://asifofficial321:hITI6uvA8NjkYrsA@cluster0.skj0wq4.mongodb.net/",
  {
    dbName: "Shopmate",
  }
);

const Schema = new mongoose.Schema({
  email: String,
  S_name: String,
  S_img: String,
  S_type: String,
  S_address: String,
});
const modal = mongoose.model("Admin", Schema);

module.exports = {modal};
