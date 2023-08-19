import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const staticProductData = [
  { product_id: "Product 1", name: "Product One", price: 10.99 },
  { product_id: "Product 2", name: "Product Two", price: 19.99 },
  { product_id: "Product 3", name: "Product Three", price: 7.99 },
  // Add more static product data as needed
];

const initialInventoryState = {
  inventory_id: "",
  stock_quantity: 0,
  reorder_point: 0,
};

const initialProductState = {
  product_id: "test",
  quantity: 0,
};

const AddInventoryForm = () => {
  const [inventory, setInventory] = useState(initialInventoryState);
  const [products, setProducts] = useState([initialProductState]);

  // Calculate the stock quantity of the inventory based on the quantities of the selected products
  const stockQuantity = products.reduce(
    (acc, product) => acc + Number(product.quantity),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventory((prevInventory) => ({
      ...prevInventory,
      [name]: value,
    }));
  };

  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      [name]: value,
    };
    setProducts(updatedProducts);
  };

  const handleProductSelect = (index, newValue) => {
    if (newValue !== null) {
      const updatedProducts = [...products];
      updatedProducts[index] = {
        ...JSON.parse(JSON.stringify(updatedProducts[index])),
        product_id: newValue,
      };
      setProducts(updatedProducts);
    }
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...initialProductState }]);
  };

  const handleReset = () => {
    setInventory(initialInventoryState);
    setProducts([initialProductState]);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission and page refresh
    // Placeholder implementation for form submission handling
    console.log("Form submitted. Add your logic here.");
  };

  const availableProducts = staticProductData.filter(
    (product) =>
      !products.some(
        (selectedProduct) => selectedProduct.product_id === product.product_id
      )
  );

  // Check if all products have been selected
  const allProductsSelected = availableProducts.length === 0;

  return (
    <div>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Add Inventory
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Grid container spacing={2}>
                {/* Inventory Fields */}
                <Grid item xs={12}>
                  <TextField
                    label="Inventory ID"
                    name="inventory_id"
                    value={inventory.inventory_id}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Stock Quantity"
                    name="stock_quantity"
                    value={stockQuantity}
                    // Disable the stock_quantity input
                    disabled
                    fullWidth
                    required
                  />
                </Grid>

                {/* Product List */}
                {products.map((product, index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={12} sm={6}>
                      {/* Replace Autocomplete with FormControl and Select */}
                      <FormControl fullWidth>
                        <Select
                          labelId={`product-${index}-label`}
                          id={`product-${index}`}
                          value={product.product_id}
                          onChange={(e) =>
                            handleProductSelect(index, e.target.value)
                          }
                          renderValue={(selected) => {
                            const selectedProduct = staticProductData.find(
                              (product) => product.product_id === selected
                            );
                            return selectedProduct ? selectedProduct.name : "";
                          }}
                        >
                          {availableProducts.map((option) => (
                            <MenuItem
                              key={option.product_id}
                              value={option.product_id}
                            >
                              {option.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Quantity"
                        name="quantity"
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleProductChange(index, e)}
                        fullWidth
                        required
                        inputProps={{ min: 0 }} // Set the minimum value to 0
                      />
                    </Grid>
                  </React.Fragment>
                ))}

                <Grid item xs={12} sm={6}>
                  {/* Hide the "Add Product" button if all products are selected */}
                  {!allProductsSelected && (
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={handleAddProduct}
                    >
                      Add Product
                    </Button>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Add Inventory
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

export default AddInventoryForm;
