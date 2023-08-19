const express = require("express");
const router = express.Router();
const membershipRequestController = require("../controllers/MembershipRequest");

router.post("/", membershipRequestController.createMembershipRequest);
router.put("/:id", membershipRequestController.updateMembershipRequest);
router.get("/", membershipRequestController.getMembershipRequests);
router.get("/:id", membershipRequestController.getMembershipRequestById);
router.delete("/:id", membershipRequestController.deleteMembershipRequest);

module.exports = router;
