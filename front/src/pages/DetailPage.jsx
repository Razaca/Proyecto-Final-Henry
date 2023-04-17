import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../store/api/productsQuery";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  CardMedia,
} from "@mui/material";

const DetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  function handleAddToCart() {}

  return (
    <Container>
      {product && (
        <Grid container spacing={2} mt={15}>
          <Grid item sm={12} md={6}>
            <CardMedia
              sx={{ maxWidth: 500, borderRadius: 1 }}
              component="img"
              image={product.image[0]}
              alt={product.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
            <Typography variant="h6">{product.price} $</Typography>
            <form onSubmit={handleAddToCart}>
              <TextField
                type="number"
                label="Cantidad"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: 1,
                }}
                margin="normal"
                fullWidth
              />
              <Button type="submit" variant="contained" color="primary">
                Agregar al carrito
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default DetailPage;
