const Customer = require("../models/Customer");

exports.createCustomer = (req, res, next) => {
  const { name, contact_details } = req.body;

  const customer = new Customer({
    name,
    contact_details,
  });

  customer
    .save()

    .then(() => res.status(201).json({ message: "success" }))
    .catch(() => res.status(400).json({ message: "error" }));
};

exports.getCustomers = (req, res, next) => {
  Customer.find()
    .then((customers) => res.status(200).json(customers))
    .catch((error) => res.status(500).json({ error }));
};

exports.getCustomer = (req, res, next) => {
  const customerId = req.params.id;

  Customer.findById(customerId)
    .then((customer) => {
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.status(200).json(customer);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.updateCustomer = (req, res, next) => {
  const customerId = req.params.id;
  const { name, contact_details } = req.body;

  Customer.findByIdAndUpdate(
    customerId,
    { name, contact_details },
    { new: true }
  )
    .then((customer) => {
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.status(200).json(customer);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteCustomer = (req, res, next) => {
  const customerId = req.params.id;

  Customer.findByIdAndRemove(customerId)
    .then((customer) => {
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.status(200).json({ message: "Customer deleted successfully" });
    })
    .catch((error) => res.status(500).json({ error }));
};
