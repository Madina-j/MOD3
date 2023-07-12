const mongoose = require("mongoose");

const Image = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  id: { type: String, required: true },
  description: { type: String },
  alt_description: { type: String },
  urls: {
    small: { type: String },
    full: { type: String },
  },
});

module.exports = mongoose.model("Image", Image);
