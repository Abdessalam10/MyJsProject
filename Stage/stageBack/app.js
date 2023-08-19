const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const productRoutes = require("./routes/Product");
const usersRoutes = require("./routes/Users");
const inventoryRoutes = require("./routes/Inventory");
const supplierRoutes = require("./routes/Supplier");
const CustomerRoutes = require("./routes/Customer");
const ReturnRequestRoutes = require("./routes/ReturnRequest");
const Transaction = require("./routes/Transaction");
const PurchaseRequest = require("./routes/PRequest");
const MembershipRequest = require("./routes/MembershipRequest");
const app = express();
mongoose
  .connect("mongodb://localhost/badiaa", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(bodyParser.json());
app.use("/user", usersRoutes);
app.use("/product", productRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/supplier", supplierRoutes);
app.use("/customer", CustomerRoutes);
app.use("/returnrequest", ReturnRequestRoutes);
app.use("/PurchaseRequest", PurchaseRequest);
app.use("/Transaction", Transaction);
app.use("/MembershipRequest", MembershipRequest);

app.use((req, res) => {
  res.json({ message: "" });
});

module.exports = app;
