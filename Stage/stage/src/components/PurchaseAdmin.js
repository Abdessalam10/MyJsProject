// PurchaseAdmin.js

import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    margin: "0 auto",
    marginTop: "16px", // Use a specific CSS value for margin-top
    padding: "12px", // Use a specific CSS value for padding
  },
  mapContainer: {
    width: "100%",
    height: "300px",
    marginTop: "16px",
  },
});

const PurchaseAdmin = () => {
  const staticPurchaseData = {
    productName: "Sample Product",
    price: 10,
    quantity: 2,
    deliveryLocation: { lat: 40.7128, lng: -74.006 },
    userId: "user123",
  };

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Purchase Request Details
        </Typography>
        <Typography variant="body1">
          Product Name: {staticPurchaseData.productName}
          <br />
          Price: ${staticPurchaseData.price}
          <br />
          Quantity: {staticPurchaseData.quantity}
          <br />
          Delivery Location: {staticPurchaseData.deliveryLocation.lat},{" "}
          {staticPurchaseData.deliveryLocation.lng}
          <br />
          User ID: {staticPurchaseData.userId}
        </Typography>
      </CardContent>
      {/* Google Map */}
      <div className={classes.mapContainer}>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={staticPurchaseData.deliveryLocation}
            zoom={12}
          >
            <Marker position={staticPurchaseData.deliveryLocation} />
          </GoogleMap>
        </LoadScript>
      </div>
      {/* End of Google Map */}
    </Card>
  );
};

export default PurchaseAdmin;
