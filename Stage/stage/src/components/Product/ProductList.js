import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";

const ProductList = () => {
  // Replace the productsData with your actual list of products
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      price: 10.99,
      stockQuantity: 15,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      price: 19.99,
      stockQuantity: 8,
    },
    // Add more products as needed
  ]);

  const handleModify = (productId) => {
    // Handle the modify action based on the productId
    console.log("Modify product with ID:", productId);
  };

  const handleDelete = (productId) => {
    // Handle the delete action based on the productId
    console.log("Delete product with ID:", productId);
    // You may also want to update the productsData after deletion
    // For example: setProductsData(productsData.filter((product) => product.id !== productId));
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        Product List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsData.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stockQuantity}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleModify(product.id)}
                  >
                    Modify
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(product.id)}
                    style={{ marginLeft: "8px" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProductList;
