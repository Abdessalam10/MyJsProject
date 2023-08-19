const express = require("express");
const router = express.Router();
const purchaseRequestController = require("../controllers/PRequest");

router.post("/", purchaseRequestController.createPurchaseRequest);
router.put("/:id", purchaseRequestController.modifyPurchaseRequest);
router.get("/", purchaseRequestController.getPurchaseRequests);
router.get("/:id", purchaseRequestController.getPurchaseRequest);
router.delete("/:id", purchaseRequestController.deletePurchaseRequest);

module.exports = router;
