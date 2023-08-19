const express = require("express");
const router = express.Router();
const Suppliers = require("../controllers/Supplier");

router.post("/", Suppliers.createSupplier);
router.get("/", Suppliers.getSuppliers);
router.get("/:id", Suppliers.getSupplier);
router.put("/:id", Suppliers.updateSupplier);
router.delete("/:id", Suppliers.deleteSupplier);

module.exports = router;
