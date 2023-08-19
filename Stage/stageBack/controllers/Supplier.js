const Supplier = require("../models/Supplier");

exports.createSupplier = (req, res, next) => {
  const { name, contact_details } = req.body;

  const supplier = new Supplier({
    name,
    contact_details,
  });

  supplier
    .save()
    .then(() =>
      res.status(201).json({ message: "Supplier created successfully" })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.getSuppliers = (req, res, next) => {
  Supplier.find()
    .then((suppliers) => res.status(200).json(suppliers))
    .catch((error) => res.status(500).json({ error }));
};

exports.getSupplier = (req, res, next) => {
  const supplierId = req.params.id;

  Supplier.findById(supplierId)
    .then((supplier) => {
      if (!supplier) {
        return res.status(404).json({ message: "Supplier not found" });
      }
      res.status(200).json(supplier);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.updateSupplier = (req, res, next) => {
  const supplierId = req.params.id;
  const { name, contact_details } = req.body;

  Supplier.findByIdAndUpdate(
    supplierId,
    { name, contact_details },
    { new: true }
  )
    .then((supplier) => {
      if (!supplier) {
        return res.status(404).json({ message: "Supplier not found" });
      }
      res.status(200).json(supplier);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteSupplier = (req, res, next) => {
  const supplierId = req.params.id;

  Supplier.findByIdAndRemove(supplierId)
    .then((supplier) => {
      if (!supplier) {
        return res.status(404).json({ message: "Supplier not found" });
      }
      res.status(200).json({ message: "Supplier deleted successfully" });
    })
    .catch((error) => res.status(500).json({ error }));
};
