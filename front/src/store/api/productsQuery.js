import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACK_URL } from "./config";

export const products = createApi({
  reducerPath: "products",

  baseQuery: fetchBaseQuery({
    baseUrl: `${BACK_URL}`,
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/product`,
    }),
    getFilterProducts: builder.query({
      query: (filters) => `product/filter${filters}`,
    }),
    getProductById: builder.query({
      query: (id) => `/product/id/${id}`,
    }),
    getCategories: builder.query({
      query: () => `/category`,
    }),
    getColors: builder.query({
      query: () => `/color`,
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/product",
        method: "POST",
        body: newProduct,
      }),
      onSuccess: (result, { dispatch }) => {
        dispatch(products.actions.getProducts());
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetFilterProductsQuery,
  useGetCategoriesQuery,
  useGetColorsQuery,
  useCreateProductMutation,
} = products;
