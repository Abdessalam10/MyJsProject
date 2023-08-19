import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  Container,
  CardContent,
  CardMedia,
} from "@mui/material";
import useStyles from "./Style";

function Acceuil() {
  const [products, setProduct] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch("http://localhost:4200/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle any error that occurs during the request
        console.error(error);
      });
  });
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={4} className={classes.cardGrid} maxwidth="md">
        {products.map((product, index) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image="./Badiaa.png" />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h3">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h5">
                  {product.price} D
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default Acceuil;
