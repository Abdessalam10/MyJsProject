const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const membershipRequestSchema = mongoose.Schema({
  request_date: { type: Date, required: true, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    required: true,
    default: "pending",
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "user" },
  number: { type: Number, required: true },
  image: { type: String, default: "test" },
});
membershipRequestSchema.plugin(uniqueValidator);
module.exports = mongoose.model("MembershipRequest", membershipRequestSchema);
