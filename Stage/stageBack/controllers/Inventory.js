const Inventory = require("../models/Inventory");

exports.createInventory = (req, res, next) => {
  const { product_id, stock_quantity, reorder_point } = req.body;

  const inventory = new Inventory({
    product_id,
    stock_quantity,
    reorder_point,
  });

  inventory
    .save()
    .then(() =>
      res.status(201).json({ message: "Inventory created successfully" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.getInventories = (req, res, next) => {
  Inventory.find()
    .populate("product_id")
    .then((inventories) => res.status(200).json(inventories))
    .catch((error) => res.status(500).json({ error }));
};

exports.getInventory = (req, res, next) => {
  const inventoryId = req.params.id;

  Inventory.findById(inventoryId)
    .populate("product_id")
    .then((inventory) => {
      if (!inventory) {
        return res.status(404).json({ message: "Inventory not found" });
      }
      res.status(200).json(inventory);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.updateInventory = (req, res, next) => {
  const inventoryId = req.params.id;
  const { stock_quantity, reorder_point } = req.body;

  Inventory.findByIdAndUpdate(
    inventoryId,
    { stock_quantity, reorder_point },
    { new: true }
  )
    .populate("product_id")
    .then((inventory) => {
      if (!inventory) {
        return res.status(404).json({ message: "Inventory not found" });
      }
      res.status(200).json(inventory);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteInventory = (req, res, next) => {
  const inventoryId = req.params.id;

  Inventory.findByIdAndRemove(inventoryId)
    .then((inventory) => {
      if (!inventory) {
        return res.status(404).json({ message: "Inventory not found" });
      }
      res.status(200).json({ message: "Inventory deleted successfully" });
    })
    .catch((error) => res.status(500).json({ error }));
};
