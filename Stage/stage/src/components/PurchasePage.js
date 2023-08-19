// PurchasePage.js

import React, { useState, useRef, useCallback } from "react";
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: "0 auto",
  },
}));

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7128, // Replace with your desired default latitude
  lng: -74.006, // Replace with your desired default longitude
};

const PurchasePage = ({ product }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const [deliveryLocation, setDeliveryLocation] = useState("");

  const mapRef = useRef(null);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleDeliveryLocationChange = (event) => {
    setDeliveryLocation(event.target.value);
  };

  const handleMapClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setDeliveryLocation(`${lat}, ${lng}`);
  }, []);

  const handlePurchase = () => {
    // Create a string with the information about the purchase request
    const purchaseInfo = `Product Name: ${product.name}\nPrice: $${product.price}\nQuantity: ${quantity}\nDelivery Location: ${deliveryLocation}`;

    // Show an alert with the information about the purchase request
    window.alert(purchaseInfo);

    // You can perform additional logic here, like sending the purchase request to the backend, etc.
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Purchase Product
        </Typography>
        <Typography variant="h6" gutterBottom>
          Product Name: {product.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Price: ${product.price}
        </Typography>
        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
        />
        <br />
        <TextField
          label="Delivery Location"
          value={deliveryLocation}
          onChange={handleDeliveryLocationChange}
        />
        <br />
        {/* Google Map */}
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onClick={handleMapClick}
            onLoad={(map) => {
              mapRef.current = map;
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
        {/* End of Google Map */}
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handlePurchase}>
          Purchase
        </Button>
      </CardActions>
    </Card>
  );
};

export default PurchasePage;
