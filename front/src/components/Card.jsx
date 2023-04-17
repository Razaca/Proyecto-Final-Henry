import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)({
  maxWidth: 345,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "1rem",
});

const StyledCardMedia = styled(CardMedia)({
  paddingTop: "100%",
});

const CardProduct = ({ product }) => {
  const { name, image, price, _id } = product;
  return (
    <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}>
      <StyledCard>
        <StyledCardMedia image={image[0]} title={name} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            width={200}
            height={50}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
      </StyledCard>
    </Link>
  );
};

export default CardProduct;
