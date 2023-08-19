const Product = require("../models/Product");

exports.createProduct = (req, res, next) => {
  const { name, description, price } = req.body;

  const product = new Product({
    name,
    description,
    price,
  });

  product
    .save()
    .then(() =>
      res.status(201).json({ message: "Product created successfully" })
    )
    .catch((error) => res.status(400).json({ message: "error!" }));
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(500).json({ error }));
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.id;

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.updateProduct = (req, res, next) => {
  const productId = req.params.id;
  const { name, description, price } = req.body;

  Product.findByIdAndUpdate(
    productId,
    { name, description, price },
    { new: true }
  )
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.id;

  Product.findByIdAndRemove(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    })
    .catch((error) => res.status(500).json({ error }));
};
