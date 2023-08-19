const mongoose = require("mongoose");

const returnRequestSchema = mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  return_reason: { type: String },
  status: { type: String },
});

module.exports = mongoose.model("ReturnRequest", returnRequestSchema);
