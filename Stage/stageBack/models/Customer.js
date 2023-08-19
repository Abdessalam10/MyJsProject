const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: { type: String, required: true },
  contact_details: {
    email: { type: String },
    phone: { type: String },
    address: { type: String },
  },
});

module.exports = mongoose.model("Customer", customerSchema);
