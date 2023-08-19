const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
  name: { type: String, required: true },
  contact_details: {
    email: { type: String },
    phone: { type: String },
    address: { type: String },
  },
});

module.exports = mongoose.model("Supplier", supplierSchema);
