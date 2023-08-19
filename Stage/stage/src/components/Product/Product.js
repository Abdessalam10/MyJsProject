import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const AddProductForm = () => {
  const initialProductState = {
    name: "",
    description: "",
    price: 0,
    stockQuantity: 0, // New field for stock quantity
  };

  const [product, setProduct] = useState(initialProductState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Send the product data to the server or perform any desired action
      console.log(product);
      setProduct(initialProductState);
      setErrors({});
      // Display a success message to the user
      alert("Product added successfully!");
    }
  };

  const handleReset = () => {
    setProduct(initialProductState);
    setErrors({});
  };

  const validateForm = () => {
    const errors = {};
    if (!product.name.trim()) {
      errors.name = "Name is required";
    }
    if (!product.description.trim()) {
      errors.description = "Description is required";
    }
    if (isNaN(product.price) || product.price <= 0) {
      errors.price = "Price must be a valid positive number";
    }
    if (isNaN(product.stockQuantity) || product.stockQuantity < 0) {
      errors.stockQuantity =
        "Stock quantity must be a valid non-negative number";
    }
    return errors;
  };

  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Add New Product
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!errors.description}
                    helperText={errors.description}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Price"
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!errors.price}
                    helperText={errors.price}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Stock Quantity"
                    name="stockQuantity"
                    type="number"
                    value={product.stockQuantity}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!errors.stockQuantity}
                    helperText={errors.stockQuantity}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Add Product
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AddProductForm;
