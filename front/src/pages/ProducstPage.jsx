import React, { useState } from "react";
import { Grid } from "@mui/material";
import FilterBar from "../components/FilterBar";
import { useGetFilterProductsQuery } from "../store/api/productsQuery";
import Cards from "../components/Cards";

const ProductsPage = () => {
  const [filters, setFilters] = useState("?");
  const {
    data: products,
    error,
    isLoading,
  } = useGetFilterProductsQuery(filters);

  return (
    <Grid container mt={5}>
      <Grid item xs={3}>
        <FilterBar filters={filters} setFilters={setFilters} filterQuery={useGetFilterProductsQuery}/>
      </Grid>
      <Grid item xs={9}>
        <Cards products={products} />
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
