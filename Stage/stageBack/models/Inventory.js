const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  stock_quantity: { type: Number, required: true },
  reorder_point: { type: Number, required: true },
});

module.exports = mongoose.model("Inventory", inventorySchema);
