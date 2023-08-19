const express = require("express");
const router = express.Router();
const TransactionController = require("../controllers/Transaction");

router.post("/", TransactionController.createTransaction);
router.get("/", TransactionController.getAllTransactions);
router.get("/:id", TransactionController.getTransaction);
router.put("/:id", TransactionController.updateTransaction);
router.delete("/:id", TransactionController.deleteTransaction);

module.exports = router;
