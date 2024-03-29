const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "already taken"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user"
  }
});

module.exports = mongoose.model("user", userSchema);
