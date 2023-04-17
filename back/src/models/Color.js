const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Color", colorSchema);
