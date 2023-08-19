import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

const staticProductData = [
  { product_id: "Product 1", name: "Product One", price: 10.99 },
  { product_id: "Product 2", name: "Product Two", price: 19.99 },
  { product_id: "Product 3", name: "Product Three", price: 7.99 },
  // Add more static product data as needed
];

const initialProductState = {
  product_id: "",
  name: "",
  quantity: 0,
};

const UpdateInventories = () => {
  const [inventory, setInventory] = useState({
    inventory_id: "Inv-001",
    stock_quantity: 80, // Initialize stock_quantity to 0
    reorder_point: 20,
    products: [
      { product_id: "Prod-001", name: "Product 1", quantity: 30 },
      { product_id: "Prod-002", name: "Product 2", quantity: 50 },
    ],
  });
  const [products, setProducts] = useState([initialProductState]);
  const [selectedProduct, setSelectedProduct] = useState(initialProductState);
  const [deletedProducts, setDeletedProducts] = useState([]);

  const handleReset = () => {
    setSelectedProduct(initialProductState);
    setDeletedProducts([]);
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

  const availableProducts = staticProductData.filter(
    (product) =>
      !products.some(
        (selectedProduct) => selectedProduct.product_id === product.product_id
      )
  );

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

  const handleProductDataChange = (e, product_id) => {
    const { name, value } = e.target;
    setInventory((prevInventory) => ({
      ...prevInventory,
      products: prevInventory.products.map((product) =>
        product.product_id === product_id
          ? { ...product, [name]: value }
          : product
      ),
    }));
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...initialProductState }]);
  };

  const handleUpdateProduct = () => {
    // Update the selected product in the inventory
    setInventory((prevInventory) => ({
      ...prevInventory,
      products: prevInventory.products.map((product) =>
        product.product_id === selectedProduct.product_id
          ? selectedProduct
          : product
      ),
    }));
  };

  const handleDeleteProduct = (product_id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      // Find the product index in the inventory
      const productIndexInInventory = inventory.products.findIndex(
        (product) => product.product_id === product_id
      );

      // Find the product index in the products state
      const productIndexInProducts = products.findIndex(
        (product) => product.product_id === product_id
      );

      // Delete the selected product from the inventory
      if (productIndexInInventory !== -1) {
        setInventory((prevInventory) => ({
          ...prevInventory,
          products: [
            ...prevInventory.products.slice(0, productIndexInInventory),
            ...prevInventory.products.slice(productIndexInInventory + 1),
          ],
        }));
      }

      // Delete the selected product from the products state if it's a newly added product
      if (productIndexInProducts !== -1) {
        setProducts((prevProducts) => [
          ...prevProducts.slice(0, productIndexInProducts),
          ...prevProducts.slice(productIndexInProducts + 1),
        ]);
      }

      setDeletedProducts((prevDeleted) => [...prevDeleted, product_id]);
      setSelectedProduct(initialProductState); // Clear the selected product after deletion
    }
  };

  useEffect(() => {
    // Calculate the initial stock quantity
    const initialStockQuantity = inventory.products.reduce(
      (acc, product) => acc + Number(product.quantity),
      0
    );

    setInventory((prevInventory) => ({
      ...prevInventory,
      stock_quantity: initialStockQuantity,
    }));
  }, []); // This will run once when the component mounts

  useEffect(() => {
    // Calculate stock quantity whenever the quantities of the selected products change
    const stockQuantity = products.reduce(
      (acc, product) => acc + Number(product.quantity),
      0
    );
    setInventory((prevInventory) => ({
      ...prevInventory,
      stock_quantity: stockQuantity,
    }));
  }, [products]);

  return (
    <div>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Update Inventory
            </Typography>
            <form style={{ width: "100%" }}>
              <Grid container spacing={2}>
                {/* Inventory Fields */}
                <Grid item xs={12}>
                  <TextField
                    label="Inventory ID"
                    name="inventory_id"
                    value={inventory.inventory_id}
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Stock Quantity"
                    name="stock_quantity"
                    value={inventory.stock_quantity}
                    // Disable the stock_quantity input
                    disabled
                    fullWidth
                    required
                  />
                </Grid>

                {/* Product List */}
                {inventory.products.map((product) => (
                  <React.Fragment key={product.product_id}>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Product ID"
                        name="product_id"
                        value={product.product_id}
                        fullWidth
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        label="Product Name"
                        name="name"
                        value={product.name}
                        fullWidth
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        label="Quantity"
                        name="quantity"
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          handleProductDataChange(e, product.product_id)
                        }
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={() => handleDeleteProduct(product.product_id)}
                      >
                        X
                      </Button>
                    </Grid>
                  </React.Fragment>
                ))}
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
                    <Grid item xs={12} sm={5}>
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
                    <Grid item xs={12} sm={1}>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={() => handleDeleteProduct(product.product_id)}
                      >
                        X
                      </Button>
                    </Grid>
                  </React.Fragment>
                ))}

                <Grid item xs={12} sm={6}>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleAddProduct}
                  >
                    Add Product
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleUpdateProduct}
                  >
                    Update Inventory
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

export default UpdateInventories;
