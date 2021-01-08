const mongoose = require("mongoose");

const memSchema = mongoose.Schema({
  creator: {
    type: String,
    reqired: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: [String],
  message: {
    type: String,
    // required: true,
  },
  selectedFile: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("memories", memSchema);
