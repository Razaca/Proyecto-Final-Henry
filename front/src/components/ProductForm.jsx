import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
  useGetColorsQuery,
} from "../store/api/productsQuery";
import CheckboxGroup from "./CheckboxGroup";

const allSizes = [
  {
    _id: 1,
    name: "S",
  },
  {
    _id: 2,
    name: "M",
  },
  {
    _id: 3,
    name: "L",
  },
  {
    _id: 4,
    name: "XL",
  },
  {
    _id: 5,
    name: "XXL",
  },
];

const allGenres = [
  {
    _id: 1,
    name: "hombre",
  },
  {
    _id: 2,
    name: "mujer",
  },
];

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [colors, setColors] = useState([]);
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const { data: allCategories } = useGetCategoriesQuery();
  const { data: allColors } = useGetColorsQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct({
      ...productData,
      category: categories,
      size: sizes,
      color: colors,
      genre: genres,
    }).unwrap();
  };

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  return (
    <Container maxWidth="sm" sx={{ mb: 5 }}>
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          Crear un nuevo producto
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
              label="Nombre"
              variant="outlined"
              name="name"
              fullWidth
              required
              value={productData.name}
              onChange={handleInputChange}
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Precio"
              variant="outlined"
              name="price"
              fullWidth
              required
              type="number"
              value={productData.price}
              onChange={handleInputChange}
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Descripción"
              variant="outlined"
              name="description"
              fullWidth
              required
              multiline
              rows={4}
              value={productData.description}
              onChange={handleInputChange}
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Imagen"
              variant="outlined"
              name="image"
              fullWidth
              required
              value={productData.image}
              onChange={handleInputChange}
            />
          </Box>
          <Box mt={2}>
            {allCategories && (
              <CheckboxGroup
                values={allCategories}
                setter={setCategories}
                getter={categories}
                title="Categorias:"
              />
            )}
          </Box>
          <Box mt={2}>
            {allCategories && (
              <CheckboxGroup
                values={allSizes}
                setter={setSizes}
                getter={sizes}
                title="Talles:"
              />
            )}
          </Box>
          <Box mt={2}>
            {allCategories && (
              <CheckboxGroup
                values={allGenres}
                setter={setGenres}
                getter={genres}
                title="Corte:"
              />
            )}
          </Box>
          <Box mt={2}>
            {allCategories && (
              <CheckboxGroup
                values={allColors}
                setter={setColors}
                getter={colors}
                title="Colores:"
              />
            )}
          </Box>

          <Box mt={3}>
            <Button type="submit" variant="contained" color="primary">
              Crear
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ProductForm;
