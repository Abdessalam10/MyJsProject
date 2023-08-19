const ReturnRequest = require("../models/ReturnRequest");

exports.createReturnRequest = (req, res, next) => {
  const { customer_id, product_id, return_reason, status } = req.body;

  const returnRequest = new ReturnRequest({
    customer_id,
    product_id,
    return_reason,
    status,
  });

  returnRequest
    .save()
    .then(() =>
      res.status(201).json({ message: "Return request created successfully" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.getReturnRequests = (req, res, next) => {
  ReturnRequest.find()
    .then((returnRequests) => res.status(200).json(returnRequests))
    .catch((error) => res.status(500).json({ error }));
};

exports.getReturnRequest = (req, res, next) => {
  const returnRequestId = req.params.id;

  ReturnRequest.findById(returnRequestId)
    .then((returnRequest) => {
      if (!returnRequest) {
        return res.status(404).json({ message: "Return request not found" });
      }
      res.status(200).json(returnRequest);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.updateReturnRequest = (req, res, next) => {
  const returnRequestId = req.params.id;
  const { customer_id, product_id, return_reason, status } = req.body;

  ReturnRequest.findByIdAndUpdate(
    returnRequestId,
    { customer_id, product_id, return_reason, status },
    { new: true }
  )
    .then((returnRequest) => {
      if (!returnRequest) {
        return res.status(404).json({ message: "Return request not found" });
      }
      res.status(200).json(returnRequest);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteReturnRequest = (req, res, next) => {
  const returnRequestId = req.params.id;

  ReturnRequest.findByIdAndRemove(returnRequestId)
    .then((returnRequest) => {
      if (!returnRequest) {
        return res.status(404).json({ message: "Return request not found" });
      }
      res.status(200).json({ message: "Return request deleted successfully" });
    })
    .catch((error) => res.status(500).json({ error }));
};
