const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  senha: Number,
});

module.exports = mongoose.model("User", userSchema);
