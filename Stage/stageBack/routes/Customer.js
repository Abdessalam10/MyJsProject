const express = require("express");
const router = express.Router();
const Customers = require("../controllers/Customer");

router.post("/", Customers.createCustomer);
router.get("/", Customers.getCustomers);
router.get("/:id", Customers.getCustomer);
router.put("/:id", Customers.updateCustomer);
router.delete("/:id", Customers.deleteCustomer);

module.exports = router;
