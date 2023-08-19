const mongoose = require("mongoose");

const purchaseRequestSchema = mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  request_date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("PRequest", purchaseRequestSchema);
