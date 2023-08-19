import React from "react";
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
  Tooltip,
} from "@mui/material";

const staticInventoryData = [
  {
    _id: "1",
    stock_quantity: 10,
    products: [
      {
        product_id: "Product 1",
        name: "Product One",
        price: 10.99,
        reorder_point: 5,
        stock_quantity: 3, // Individual product stock quantity
      },
      {
        product_id: "Product 2",
        name: "Product Two",
        price: 19.99,
        reorder_point: 8,
        stock_quantity: 7, // Individual product stock quantity
      },
    ],
  },
  {
    _id: "2",
    stock_quantity: 15,
    products: [
      {
        product_id: "Product 3",
        name: "Product Three",
        price: 7.99,
        reorder_point: 3,
        stock_quantity: 5, // Individual product stock quantity
      },
    ],
  },
  // Add more static inventory data with associated products as needed
];

const InventoryList = () => {
  const renderProductTooltip = (product) => {
    return (
      <div>
        <b>{product.product_id}</b>
        <br />
        Name: {product.name}
        <br />
        Price: ${product.price.toFixed(2)}
        <br />
        Reorder Point: {product.reorder_point}
        <br />
        Stock Quantity: {product.stock_quantity}
      </div>
    );
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        Inventory List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Inventory ID</TableCell>
              <TableCell>Stock Quantity (Inventory)</TableCell>
              <TableCell>Product ID</TableCell>
              <TableCell>Stock Quantity (Product)</TableCell>
              <TableCell>Reorder Point</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticInventoryData.map((inventory) => {
              const rowspan = inventory.products.length;
              return (
                <React.Fragment key={inventory._id}>
                  {inventory.products.map((product, index) => (
                    <TableRow key={`${inventory._id}-${product.product_id}`}>
                      {index === 0 ? (
                        <TableCell rowSpan={rowspan}>{inventory._id}</TableCell>
                      ) : null}
                      {index === 0 ? (
                        <TableCell rowSpan={rowspan}>
                          {inventory.stock_quantity}
                        </TableCell>
                      ) : null}
                      <TableCell>
                        <Tooltip title={renderProductTooltip(product)}>
                          <span>{product.product_id}</span>
                        </Tooltip>
                      </TableCell>
                      <TableCell>{product.stock_quantity}</TableCell>
                      <TableCell>{product.reorder_point}</TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default InventoryList;
