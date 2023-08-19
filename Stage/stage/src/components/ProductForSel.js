import React from "react";
import {
  Grid,
  Card,
  Typography,
  Container,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ShoppingCart } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s, opacity 0.3s", // Add transition properties for animation
    "&:hover": {
      transform: "scale(1.1)",
      opacity: 0.9, // Reduce opacity on hover for fade-in effect
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  buyButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buyIcon: {
    marginRight: 8,
  },
}));

function ProductForSel() {
  const classes = useStyles();

  // Define static product data
  const staticProducts = [
    { id: 1, name: "Product 1", price: 10.99, image: "./Badiaa.png" },
    { id: 2, name: "Product 2", price: 19.99, image: "./Badiaa.png" },
    { id: 3, name: "Product 3", price: 7.49, image: "./Badiaa.png" },
    // Add more products as needed
  ];

  return (
    <>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={4} className={classes.cardGrid} maxWidth="md">
          {staticProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={`${classes.cardMedia} ${classes.cardMediaHover}`}
                  image={product.image}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h3">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    {product.price} D
                  </Typography>
                  <IconButton color="primary" className={classes.buyButton}>
                    <ShoppingCart className={classes.buyIcon} />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Outlet />
    </>
  );
}

export default ProductForSel;
