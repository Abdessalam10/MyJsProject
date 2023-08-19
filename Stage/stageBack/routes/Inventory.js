const express = require("express");
const router = express.Router();
const Inventory = require("../controllers/Inventory");

router.post("/", Inventory.createInventory);
router.get("/", Inventory.getInventories);
router.get("/:id", Inventory.getInventory);
router.put("/:id", Inventory.updateInventory);
router.delete("/:id", Inventory.deleteInventory);

module.exports = router;
