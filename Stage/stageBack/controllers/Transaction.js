const Transaction = require("../models/Transaction");

exports.createTransaction = (req, res, next) => {
  const {
    product_id,
    transaction_type,
    quantity,
    supplier,
    customer,
    recorded_by,
  } = req.body;
  //const recorded_by = req.user.id; // Assuming you have authentication middleware to get the user ID

  const transaction = new Transaction({
    product_id,
    transaction_type,
    quantity,
    supplier,
    customer,
    recorded_by,
  });

  transaction
    .save()
    .then(() =>
      res.status(201).json({ message: "Transaction created successfully." })
    )
    .catch((error) => res.status(400).json({ error }));
};
exports.getAllTransactions = (req, res, next) => {
  Transaction.find()
    .populate("product_id supplier customer recorded_by")
    .then((transactions) => res.status(200).json(transactions))
    .catch((error) => res.status(500).json({ error }));
};

exports.getTransaction = (req, res, next) => {
  const transactionId = req.params.id;

  Transaction.findById(transactionId)
    .populate("product_id supplier customer recorded_by")
    .then((transaction) => {
      if (!transaction) {
        return res.status(404).json({ message: "Transaction not found." });
      }
      res.status(200).json(transaction);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.updateTransaction = (req, res, next) => {
  const transactionId = req.params.id;
  const { product_id, transaction_type, quantity, supplier, customer } =
    req.body;

  Transaction.findByIdAndUpdate(transactionId, {
    product_id,
    transaction_type,
    quantity,
    supplier,
    customer,
    updatedAt: Date.now(),
  })
    .then(() =>
      res.status(200).json({ message: "Transaction updated successfully." })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteTransaction = (req, res, next) => {
  const transactionId = req.params.id;

  Transaction.findByIdAndDelete(transactionId)
    .then(() =>
      res.status(200).json({ message: "Transaction deleted successfully." })
    )
    .catch((error) => res.status(400).json({ error }));
};
