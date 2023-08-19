const express = require("express");
const router = express.Router();
const ReturnRequests = require("../controllers/ReturnRequest");

router.post("/", ReturnRequests.createReturnRequest);
router.get("/", ReturnRequests.getReturnRequests);
router.get("/:id", ReturnRequests.getReturnRequest);
router.put("/:id", ReturnRequests.updateReturnRequest);
router.delete("/:id", ReturnRequests.deleteReturnRequest);

module.exports = router;
