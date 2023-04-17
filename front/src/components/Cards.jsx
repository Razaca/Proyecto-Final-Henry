import { Grid } from "@mui/material";
import CardProduct from "./Card";


const Cards = ({ products }) => {
  return (
    <Grid container spacing={2} sx={{ mt: "2rem" }}>
      {products &&
        products.map((el) => (
          <Grid item xs={12} sm={6} md={4} key={el._id}>
            <CardProduct product={el} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Cards;
