// ReturnRequestPage.js

import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: "0 auto",
  },
}));

const ReturnRequestPage = () => {
  const [productName, setProductName] = useState("");
  const [reasonForReturn, setReasonForReturn] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const classes = useStyles();

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleReasonForReturnChange = (event) => {
    setReasonForReturn(event.target.value);
  };

  const handleAdditionalNotesChange = (event) => {
    setAdditionalNotes(event.target.value);
  };

  const handleReturnRequest = () => {
    // Create a return request object with the user's input
    const returnRequest = {
      productName,
      reasonForReturn,
      additionalNotes,
    };

    // You can handle the return request here and send the data to the backend.
    // For this example, we will just log the data to the console.
    console.log("Return Request:", returnRequest);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Return Request
        </Typography>
        <TextField
          label="Product Name"
          value={productName}
          onChange={handleProductNameChange}
        />
        <br />
        <TextField
          label="Reason for Return"
          value={reasonForReturn}
          onChange={handleReasonForReturnChange}
        />
        <br />
        <TextField
          label="Additional Notes"
          multiline
          rows={4}
          value={additionalNotes}
          onChange={handleAdditionalNotesChange}
        />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={handleReturnRequest}
        >
          Submit Request
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReturnRequestPage;
