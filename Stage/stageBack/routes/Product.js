const express = require("express");
const router = express.Router();
const Products = require("../controllers/Product");

router.post("/", Products.createProduct);
router.get("/", Products.getProducts);
router.get("/:id", Products.getProduct);
router.put("/:id", Products.updateProduct);
router.delete("/:id", Products.deleteProduct);

module.exports = router;
