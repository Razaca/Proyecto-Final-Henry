const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: [String],
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  gender: {
    type: [String],
    required: true,
  },
  image: {
    type: [String],
    required: true,
    default: ["https://th.bing.com/th/id/R.391beef98ee633f945249128ba57fac5?rik=sol3t9K6b%2fyKLw&pid=ImgRaw&r=0"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
