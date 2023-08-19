const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  transaction_type: {
    type: String,
    enum: ["purchase", "sale", "return"],
    required: true,
  },
  quantity: { type: Number, required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  recorded_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", transactionSchema);
