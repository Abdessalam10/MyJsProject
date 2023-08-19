const PurchaseRequest = require("../models/PRequest");

// Get all purchase requests
exports.getPurchaseRequests = (req, res) => {
  PurchaseRequest.find()
    .populate("customer_id")
    .populate("product_id")
    .exec()
    .then((purchaseRequests) => {
      res.status(200).json({ purchaseRequests });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Create a new purchase request
exports.createPurchaseRequest = (req, res) => {
  const { customer_id, request_date, status, product_id, quantity } = req.body;

  const purchaseRequest = new PurchaseRequest({
    customer_id,
    request_date,
    status,
    product_id,
    quantity,
  });

  purchaseRequest
    .save()
    .then((savedPurchaseRequest) => {
      res.status(201).json({ purchaseRequest: savedPurchaseRequest });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

// Get a specific purchase request by ID
exports.getPurchaseRequest = (req, res) => {
  const purchaseRequestId = req.params.id;

  PurchaseRequest.findById(purchaseRequestId)
    .populate("customer_id")
    .populate("product_id")
    .exec()
    .then((purchaseRequest) => {
      if (!purchaseRequest) {
        res.status(404).json({ message: "Purchase request not found" });
      } else {
        res.status(200).json({ purchaseRequest });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

// Update a purchase request
exports.modifyPurchaseRequest = (req, res) => {
  const purchaseRequestId = req.params.id;
  const { customer_id, request_date, status, product_id, quantity } = req.body;

  PurchaseRequest.findByIdAndUpdate(
    purchaseRequestId,
    { customer_id, request_date, status, product_id, quantity },
    { new: true }
  )
    .then((updatedPurchaseRequest) => {
      if (!updatedPurchaseRequest) {
        res.status(404).json({ message: "Purchase request not found" });
      } else {
        res.status(200).json({ purchaseRequest: updatedPurchaseRequest });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Delete a purchase request
exports.deletePurchaseRequest = (req, res) => {
  const purchaseRequestId = req.params.id;

  PurchaseRequest.findByIdAndRemove(purchaseRequestId)
    .then((deletedPurchaseRequest) => {
      if (!deletedPurchaseRequest) {
        res.status(404).json({ message: "Purchase request not found" });
      } else {
        res
          .status(200)
          .json({ message: "Purchase request deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
