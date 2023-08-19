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
} from "@mui/material";

const TransactionPage = () => {
  // Sample transaction data as a variable
  const transactions = [
    {
      _id: "1",
      product_id: "123",
      transaction_type: "purchase",
      quantity: 5,
      supplier: "Supplier A",
      customer: null,
      recorded_by: "User 1",
      createdAt: "2023-08-01T12:34:56.000Z",
      updatedAt: "2023-08-01T12:34:56.000Z",
    },
    // Add more sample transactions here...
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Transaction History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Transaction Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Recorded By</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction._id}>
                <TableCell>{transaction.product_id}</TableCell>
                <TableCell>{transaction.transaction_type}</TableCell>
                <TableCell>{transaction.quantity}</TableCell>
                <TableCell>{transaction.supplier}</TableCell>
                <TableCell>{transaction.customer}</TableCell>
                <TableCell>{transaction.recorded_by}</TableCell>
                <TableCell>
                  {new Date(transaction.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  {new Date(transaction.updatedAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TransactionPage;
