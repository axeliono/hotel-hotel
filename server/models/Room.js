const mongoose = require("mongoose");

const { Schema } = mongoose;

const roomSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 99.99,
  },
  description: {
    type: String,
  },
  isPaid: {
    type: Boolean,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
