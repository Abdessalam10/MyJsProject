const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "user" },
  number: { type: Number, required: true },
  image: { type: String, default: "test" },
  created_at: { type: Date, default: Date.now },
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Users", userSchema);
